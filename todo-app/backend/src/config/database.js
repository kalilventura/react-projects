const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const databaseConfig = {
    database: 'mongodb',
    host: 'localhost',
    schema: 'todo'
}

module.exports = mongoose.connect(`${databaseConfig.database}://${databaseConfig.host}/${databaseConfig.schema}`)