const mongoose = require('mongoose')

const db = () => {
    return mongoose.connect('mongodb://127.0.0.1:27017/mvc')
     
}

module.exports = {
    db
}