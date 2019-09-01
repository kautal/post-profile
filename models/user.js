const db = require('../dbconfig')

const User = {
    async getAll() {
        try {
            const data = await db('users').select()
            return data
        }
        catch(e) {
            console.log(e)
        }
    }
}

module.exports = User