const db = require('../config/dbconfig')

const Auth = {
    async getUser(user) {
        try {
            const data = await db('users').select('user').where('user', user)
            return data[0]
        }
        catch(e) {
            console.log(e)
        }
    },

    async getPassword(pass) {
        try {
            const data = await db('users').select('password').where('password', pass)
            return data[0]
        }
        catch(e) {
            console.log(e)
        }
    }
}

module.exports = Auth