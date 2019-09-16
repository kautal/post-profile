const db = require('../config/dbconfig')
const joi = require('joi')

async function validation(body) {
    const schema = {
        name: joi.string().max(75).required(),
        birthday: joi.date().required(),
        email: joi.string().max(35).required(),
        telp: joi.string().max(25).required(),
        address: joi.string().required(),
        province: joi.string().max(40).required(),
        city: joi.string().max(40).required(),
        stats: joi.bool().required()

    }
    return joi.validate(body, schema)
}

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

    async getByName(name) {
        try {
            const data = await db('employees').select().where('name','like', `%${name}%`)
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
                city: body.city,
                stats: body.stats
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
                city: body.city,
                stats: body.stats
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