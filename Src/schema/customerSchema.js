const mongoose = require('mongoose')
const admin = require('./adminSchema')

const customerSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    categoryName: {
        type: String,
    },
    shopName: {
        type: String,
        unique: true
    },
    address: {
        type: String,
        unique: true
    },
    productName:{
        type: String,
    },
    productPrice:{
        type: String,
    },
    offerPercentage: {
        type: String,
    },
})

module.exports = mongoose.model('customer', customerSchema)