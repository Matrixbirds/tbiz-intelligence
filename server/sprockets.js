'use strict'

const mixin = Object.assign

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

const imports = resolveModule(
    [
        'fs',
        'path',
        'os',
        'repl'
    ]
)
Object.assign(imports, declare)
Object.assign(imports, {
    mixin: Object.assign,
    defineProperty: Object.defineProperty
})

const {path} = imports

function loadModule (pathname) {
    return require(path.join(__dirname, pathname))
}

function resolver ({pathname, path, pattern}) {
    const {fs} = imports
    return fs
        .readdirSync(pathname)
        .filter(e => e.match(pattern))
}

exports = module.exports = {
    declare,
    env: require(path.join(__dirname, 'config.js')),
    resolver,
    imports,
    providers: [],
    resolveModule,
    loadModule
}
