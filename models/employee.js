const db = require('../dbconfig')

const Employee = {
    async getAll() {
        try {
            const data = await db('employees').select()
            return data
        }
        catch(e) {
            console.log(e)
        }
    },

    async getById(id) {
        try {
            const data = await db('employees').select().where('id', id)
            return data[0]
        }
        catch(e) {
            console.log(e)
        }
    },

    async getByEmail(email) {
        try {
            const data = await db('employees').select().where('email', email)
            return data
        }
        catch(e) {
            console.log(e)
        }
    },

    async getByName(name) {
        try {
            const data = await db('employees').select().where('name', name)
            return data
        }
        catch(e) {
            console.log(e)
        }
    },
    
    async addEmployee(body) {
        try {
            await db('employees').insert({
                name: body.name,
                birthday: body.birthday,
                email: body.email,
                telp: body.telp,
                address: body.address,
                province: body.province,
                city: body.city
            })
            return true
        }
        catch(e) {
            console.log(e)
        }
    },

    async updateEmployee(id, body) {
        try {
            await db('employees').update({
                name: body.name,
                birthday: body.birthday,
                email: body.email,
                telp: body.telp,
                address: body.address,
                province: body.province,
                city: body.city
            }).where('id', id)
            return true
        }
        catch(e) {
            console.log(e)
        }
    },

    async deleteEmployee (id) {
        try {
            await db('employees').delete().where('id', id)
            return true
        }
        catch(e) {
            console.log(e)
        }
    }
}

module.exports = Employee