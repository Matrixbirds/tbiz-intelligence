'use strict'

exports = module.exports = function ({
    fs, path, graphql, mixin,
    env
}) {
    const {
        buildSchema, GraphQLObjectType,
        GraphQLID, GraphQLString, GraphQLInterfaceType,
        GraphQLNonNull
    } = graphql

    const data = fs
        .readFileSync(path.join(__dirname, './root.graphql'))
    const schema = new buildSchema(''+data)

    const config = { schema }

    const NodeInterface = new GraphQLInterfaceType({
        name: 'node',
        fields: {
            id: {type: new GraphQLNonNull(GraphQLID)}
        }
    })

    const User = new GraphQLObjectType({
        name: 'me profile',
        description: 'me api desc',
        fields: () => ({
            id: {
                type: GraphQLID
            },
            nickname: {
                type: GraphQLString
            },
            created_at: {
                type: GraphQLString
            },
            updated_at: {
                type: GraphQLString
            }
        }),
        interfaces: [NodeInterface]
    })

    const root = {
        async me() {
            let user = await {
                id: '2333',
                nickname: '葬爱家族丶鸟少',
                created_at: new Date(),
                updated_at: new Date()
            }
            return user
        }
    }

    mixin(config, env.graphql_config)
    mixin(config, {
        formatError: (error, ctx) => ({
            message: error.message,
            locations: error.locations,
            stack: error.stack,
            path: error.path
        }),
        rootValue: root
    })
    return config
}