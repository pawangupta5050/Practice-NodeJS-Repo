const mongoose = require('mongoose');

const db = () => {
    return mongoose.connect('mongodb://127.0.0.1/shortUrl')
}

module.exports = {
    db,
}