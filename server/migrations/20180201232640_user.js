
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTableIfNotExists("users", (table) => {
            table.increments("id").primary()
            table.string("nickname").unique().comment("用户名")
            table.string("email").comment("邮箱")
            table.string("phonenumber").unique().comment("手机号")
            table.timestamps()
        }),
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users')
    ])
};
