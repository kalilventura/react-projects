const port = 3307

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./Cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function () {
    console.log('Server is running at port ' + port)
})

module.exports = server