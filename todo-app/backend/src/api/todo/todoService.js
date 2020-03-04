const Todo = require('./todo.js')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({ new: true, runValidatiors: true })

module.exports = Todo