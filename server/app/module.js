'use strict'

function load (path) {
    let module = require(path)
    if (module && typeof module === 'function') return module()
    return module
}

function resolveModule (modules, path='') {
    const declare = {}
    modules.reduce((append, item) => {
        if (typeof item === 'object') {
            append[item.alias] = load(`${path}${item.name}`)
        } else {
            append[item] = load(`${path}${item}`)
        }
        return append
    }, declare)
    return declare
}

const declare = resolveModule([
    'koa',
    'koa-bunyan-logger',
    'koa-router',
    'koa-bodyparser',
    '@koa/cors',
    'mount',
    'koa-graphql',
    {name: 'lodash', alias: '_'},
    'fs',
    'util'
])
const Module = resolveModule([
    'models',
    'graphql',
    'facilities',
    'env'
], './')

const imports = {}
Object.assign(imports, declare)

exports = module.exports = {
    declare,
    module: Module,
    imports,
    providers: [],
    resolveModule
}
