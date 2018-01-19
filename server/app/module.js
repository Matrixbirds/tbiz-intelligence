'use strict'

function _resolver (path) {
    let module = require(path)
    if (module &&
}

function resolveModule (modules, path='') {
    const declare = {}
    modules.reduce((append, item) => {
        if (typeof item === 'object') {
            append[item.alias] = require(`${path}${item.name}`)
        } else {
            append[item] = require(`${path}${item}`)
        }
        return append
    }, declare)
    return declare
}

const declare = resolveModule([
    'koa',
    'koa-bunyan-logger',
    'koa-router'
    'koa-bodyparser',
    '@koa/cors',
    'mount',
    'koa-graphql',
    {name: 'lodash', alias: '_'},
    'fs',
    'util'
])
const module = resolveModule([
    'models',
    'graphql',
    'facilities'
    'env'
], './')

const imports = {}
Object.assign(imports, declare)

exports = module.exports = {
    declare,
    module,
    imports,
    providers: []
    resolveModule
}
