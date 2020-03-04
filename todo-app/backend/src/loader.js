const server = require('./config/server')
require('./config/database')

// Passando o server que sera utilizada na funcao que foi exportada dentro do modulo
require('./config/routes')(server)
