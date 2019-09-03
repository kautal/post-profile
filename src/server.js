const express = require('express')
const cors = require('cors')
const env = require('dotenv')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const user = require('./routes/user')
const employee = require('./routes/employee')

const app = express()

env.config()

const port = process.env.PORT || 5001
const urlApi = '/api'

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to API</h1>
        <span>use <i>localhost:${port}/api/employee</i> to get Api employee</span>
    `)
})

console.log(process.env)

app.use(urlApi, user)
app.use(urlApi, employee)

app.listen(port, () => {
    console.log(`Server started on port ${process.env.PORT}`)
});