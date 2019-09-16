const express = require('express')
const Auth = require('../models/auth')
const router = express.Router()

router.post('/login', async (req, res) => {
    const username = await Auth.getUser(req.body.user)
    const password = await Auth.getPassword(req.body.password)

    if(!username) {
        res.status(400).json({
            status: 400,
            message: 'User tidak ada',
            success: false
        })
    }
    else if(!password) {
        res.status(400).json({
            status: 400,
            message: 'Password salah',
            success: false
        })
    }

    res.status(200).json({
        status: 200,
        message: 'Selamat Datang',
        success: true,
        data: {
            username: username,
            password: password
        }
    })
})

module.exports = router