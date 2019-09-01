const express = require('express')
const cors = require('cors')
const env = require('dotenv')
const bodyParser = require('body-parser')

const user = require('./routes/user')
const employee = require('./routes/employee')

const app = express()

env.config()

const port = process.env.PORT
const urlApi = '/api'

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(urlApi, user)
app.use(urlApi, employee)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});