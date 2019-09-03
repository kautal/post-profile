const express = require('express')
const Employee = require('../models/employee')
const router = express.Router()
const urlPath = '/employee'

router.get(urlPath, async (req, res) => {
    let data
    if (req.query.name) {
        data = await Employee.getByName(req.query.name)
        res.json(data)
    }
    else {
        data = await Employee.getAll()
        res.json(data)
    }
})

router.get(`${urlPath}/:id`, async (req, res) => {
    let data = await Employee.getById(req.params.id)
    res.json(data)
})

router.post(urlPath, async (req, res) => {
    const data = await Employee.addEmployee(req.body)
    res.json(data)
});

router.put(urlPath, async (req, res) => {
    const data = await Employee.updateEmployee(req.query.id, req.body)
    res.json(data)
});

router.delete(urlPath, async (req, res) => {
    const data = await Employee.deleteEmployee(req.query.id)
    res.json(data)
});

module.exports = router