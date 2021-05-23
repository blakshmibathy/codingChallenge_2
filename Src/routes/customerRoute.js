const express = require('express')
const router = express.Router()
const customerController = require('../Controllers/customerController')


router.post('/addNewCustomer', customerController.addCustomer)
router.post('/addShop', customerController.addShop)

// router.post('/addCustomer', async (req, res) => {
//     try {
//         let categoryn = await customer({ categoryName: req.body.categoryName })
//         console.log("ahha" + categoryn)
//         let categoryCheck = await admin.findOne({ category: { $elemMatch: { categoryName: categoryn.categoryName } } })
//         console.log("categoryCheck", categoryCheck);
//         if (categoryCheck) {
//             let newCustomer = await customer(req.body);
//             await newCustomer.save()
//             res.send(newCustomer);
//         }
//         else {
//             console.log("not found");
//         }
//     } catch (err) {
//         console.log("Error" + err);
//     }
// })

module.exports = router;