'use strict'

const path = require('path')
global.loadModule = require(
    path.join(__dirname, '../sprockets')
).loadModule

const sprockets = loadModule('sprockets')
const Module = sprockets.imports
const env = sprockets.env
const {bluebird, mixin, _, defineProperty} = Module

const _self = {}
_.each(
    [
        {name: 'concerns', alias: 'concerns'},
        {name: 'models', alias: 'models'},
        {name: 'graphql', alias: 'graphql'},
        {name: 'facilities', alias: 'facilities'}
    ], ({name, alias}) => {
        defineProperty(_self, alias, {
            get () {
                mixin(Module, {
                    resolver: sprockets.resolver,
                    env
                })
                return require(`../app/${name}`)(Module)
            }
        })
    }
)

function entry({
    koa, logger, router, bodyparser,
    env, util, cors, facilities
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
    if (process.env.NODE_ENV !== 'test' && require.main === module) {
        let listener = app.listen(env.port, () => {
            console.log('Listenning on %s', listener.address().port);
        });
    }
    return mixin(arguments, {app})
}

module.exports = entry(Module)
