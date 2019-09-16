const express = require('express')
const Employee = require('../models/employee')
const router = express.Router()
const urlPath = '/employee'

router.get(urlPath, async (req, res) => {
    let data
    if (req.query.name) {
        data = await Employee.getByName(req.query.name)
        if(data.length === 0) res.status(404).json({
            status: 404,
            message: 'Tidak ada pegawai',
            data
        })
        res.status(200).json({
            status: 200,
            message: `Pegawai ditemukan`,
            data
        })
    }
    else {
        data = await Employee.getAll()
        if(data.length === 0) res.status(404).json({
            status: 404,
            message: 'Database Kosong',
            data
        })
        res.status(200).json({
            status: 200,
            message: 'Data ditampilkan',
            data
        })
    }
})

router.get(`${urlPath}/:id`, async (req, res) => {
    let data = await Employee.getById(req.params.id)
    res.status(200).json({
        status: 200,
        success: true,
        data
    })
})

router.post(urlPath, async (req, res) => {
    const data = await Employee.addEmployee(req.body)
    res.status(200).json({
        status: 200,
        message: 'Berhasil ditambahkan',
        success: true,
        data
    })
});

router.put(urlPath, async (req, res) => {
    const data = await Employee.updateEmployee(req.query.id, req.body)
    res.status(200).json({
        status: 200,
        message: 'Berhasil diedit',
        success: true,
        data
    })
});

router.delete(urlPath, async (req, res) => {
    const data = await Employee.deleteEmployee(req.query.id)
    res.status(200).json({
        status: 200,
        message: 'Berhasil dihapus',
        success: true,
        data
    })
});

module.exports = router