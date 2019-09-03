const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/user', async (req, res) => {
    const data = await User.getAll()
    res.json(data)
});

module.exports = router