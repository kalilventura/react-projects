const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect(`mongodb://kalil:123456789a@ds056288.mlab.com:56288/todo-react`)