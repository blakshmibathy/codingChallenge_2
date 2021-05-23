const express = require('express')
const router = express.Router()
const adminController = require('../Controllers/adminController')

router.post('/addAdmin', adminController.addAdmin)
router.get('/getAdmin', adminController.getAdmin)

module.exports = router