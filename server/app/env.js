'use strict'

const nconf = require('nconf')
const path = require('path')
const yaml = require('js-yaml')

const APP_ENV = {};

nconf.file({
    file: path.join(__dirname, '../__settings.yml'),
    format: {
        stringify (obj, opt) {
            return yaml.safeDump(obj, opts)
        },
        parse (obj, opts) {
            return yaml.safeLoad(obj, opts)
        }
    }
})

function resolve (env) {
    const rules = [
        {name: 'development', pattern: /^dev/},
        {name: 'production', pattern: /^prod/},
        {name: 'staging', pattern: /^stage/},
        {name: 'test', pattern: /^test/}
    ]
    for (let rule of rules) {
        if (env.match(rule.pattern)) return rule.name
    }
    return rules[0].name
}
exports =  module.exports = nconf.get(resolve(process.env.NODE_ENV))
