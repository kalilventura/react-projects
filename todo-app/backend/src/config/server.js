const port = 3303

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const cors = require('./Cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cors)

server.listen(port, function() {
    console.log('Server is running at port '+ port)
})

module.exports = server