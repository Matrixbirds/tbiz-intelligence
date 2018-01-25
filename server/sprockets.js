'use strict'

function load ({path, name}) {
    const fullpath = path ?
        require('path').join(__dirname, `${path}${name}`) :
        `${path}${name}`
    let module = require(fullpath)
    if (path && module && typeof module === 'function') return module()
    return module
}

function resolveModule (modules, path='') {
    const declare = {}
    modules.reduce((append, item) => {
        if (typeof item === 'object') {
            append[item.alias] = load({path, name: item.name})
        } else {
            append[item] = load({path, name: item})
        }
        return append
    }, declare)
    return declare
}

function loadDeclare (filename) {
    const _ = require('lodash')
    const path = require('path')
    const {dependencies, alias} = require(path.join(__dirname, filename))
    const deps = []
    for (let name of Object.keys(dependencies)) {
        deps.push({
            name,
            alias: alias[name] ? alias[name] : _.camelCase(name)
        })
    }
    return deps
}

const declare = resolveModule(
    loadDeclare('package.json')
)
//const declare = resolveModule([
//    'koa',
//    'koa-bunyan-logger',
//    'koa-router',
//    'koa-bodyparser',
//    '@koa/cors',
//    'koa-graphql',
//    'bluebird',
//    'js-yaml',
//    'moment',
//    'axios',
//    {name: 'lodash', alias: '_'},
//    'fs',
//    'util'
//])
const Module = resolveModule([
    'models',
    'facilities',
    'env',
], 'app/')

const imports = {}
Object.assign(imports, declare)

exports = module.exports = {
    declare,
    module: Module,
    imports,
    providers: [],
    resolveModule
}
