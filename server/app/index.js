'use strict'

const path = require('path')
global.loadModule = require(
    path.join(__dirname, '../sprockets')
).loadModule

const sprockets = loadModule('sprockets')
const Module = sprockets.imports
const {bluebird, mixin, _, defineProperty} = Module

const _self = {}
_.each(
    [
        {name: 'concerns', alias: 'concerns'},
        {name: 'models', alias: 'models'},
        {name: 'graphql_schema', alias: 'graphql_schema'},
        {name: 'facilities', alias: 'facilities'}
    ], ({name, alias}) => {
        defineProperty(_self, alias, {
            get () {
                mixin(Module, {
                    resolver: sprockets.resolver
                })
                const _load = require(`../app/${name}`)
                if (typeof _load === 'function') {
                    return _load(Module)
                } else {
                    const error = new Error(`../app/${name}/index.js should module.exports = Function`)
                    Error.captureStackTrace(error, Error)
                    throw error
                }
            },
            enumerable: true
        })
    }
)

function entry({
    koa, logger, router, bodyparser,
    env, util, cors, facilities,
    graphqlHTTP,
    graphql_schema
}) {
    const app = new koa()
    if (process.env.NODE_ENV !== 'test') {
        app.use(logger())
        .use(logger.requestIdContext())
        .use(logger.requestLogger())
    }

    app.use(cors())
    .use(bodyparser({
        onerror (err, ctx) {
            ctx.throw(422, 'body parser error', { errors: err })
        }
    }))

    const _router = new router()

    _router.all('/graphql', graphqlHTTP(graphql_schema))
    app
    .use(_router.routes())
    .use(_router.allowedMethods())

    if (require.main === module) {
        let listener = app.listen(env.port, () => {
            console.log('Listenning on %s', listener.address().port);
        });
    }
    return mixin(arguments, {app})
}
Object.assign(Module, _self)
module.exports = entry(Module)
