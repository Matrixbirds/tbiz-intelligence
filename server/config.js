'use strict'

const path = require('path')
const jsYaml = require('js-yaml')
const fs = require('fs')
const nconf = require('nconf')

const NODE_ENV = process.env.NODE_ENV || 'dev';

const rules = [
    {pattern: /^dev/, name: 'development'},
    {pattern: /^prod/, name: 'production'},
    {pattern: /^test/, name: 'test'},
    {pattern: /^stage/, name: 'staging'}
]

let env
rules.forEach(rule => {
    if (NODE_ENV.match(rule.pattern)) env = rule.name
})

let config = nconf.file({
    file: path.join(__dirname, `__settings.yml`),
    format: {
        stringify (obj, opts) {
            return jsYaml.safeDump(obj, opts)
        },
        parse(obj, opts) {
            return jsYaml.safeLoad(obj, opts)
        }
    }
})
.env()
.get(env)

Object.assign(config, {
    APP_ENV: env
})

module.exports = config