'use strict'

exports = module.exports = function ({
    fs, path,
    graphql
}) {
    const {buildSchema} = graphql


    const data = fs
        .readFileSync(path.join(__dirname, './root.graphql'))
    const schema = new buildSchema(''+data)

    return schema
}