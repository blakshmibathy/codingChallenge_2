const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    category: [{
        categoryName: {
            type: String,
        }
    }]
})

module.exports = mongoose.model('admin', adminSchema)