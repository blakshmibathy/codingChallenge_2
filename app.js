const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const url = 'mongodb://localhost:27017/offers'

const app = express()
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
const con = mongoose.connection

con.on('open', () => {
    console.log("connected...");
})

app.use(express.json())
app.use(cors())

const adminRoute = require('../backend/Src/routes/adminRoute')
app.use('/', adminRoute)
const customerRoute = require('../backend/Src/routes/customerRoute')
app.use('/', customerRoute)

app.listen(8080, () => {
    console.log("Server started...");
})