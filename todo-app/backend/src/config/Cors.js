// Criação do Middleware para Cors
module.exports = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    res.header('Access-Control-Allow-Methods', 'Origin X-Requested-With, Content-Type, Accept')
    next()    
}