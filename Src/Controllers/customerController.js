const admin = require('../schema/adminSchema')
const customer = require('../schema/customerSchema')
module.exports = {
    addCustomer: ('/addNewCustomer', async (req, res) => {
        try {
            let newCustomer = await customer({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
                categoryName: req.body.categoryName
            })

            await newCustomer.save()
            res.send(newCustomer);
        } catch (err) {
            console.log("Error" + err);
        }
    }),
    addShop: ('/addShop', async (req, res) => {
        try {
            const userData = await customer.findOne({ email: req.body.email })
            if (!userData) {
                return res.json("Invalid User");
            }
            let categoryCheck = await admin.findOne({ category: { $elemMatch: { categoryName: req.body.categoryName } } })
            if (categoryCheck) {
                    let shopDetails = await customer.create({
                        categoryName: req.body.categoryName,
                        shopName: req.body.shopName,
                        address: req.body.address,
                        productName: req.body.productName,
                        productPrice: req.body.productPrice,
                        offerPercentage: req.body.offerPercentage
                    })
                    res.send(shopDetails)
            }
            else {
                console.log("Category you are entered Wrong");
            }
        } catch (err) {
            console.log("Error" + err);
        }
    })
}