const knex = require('knex')
const dotenv = require('dotenv')

dotenv.config()

const db = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB
    }
})

module.exports = db