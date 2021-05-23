const admin = require('../schema/adminSchema')
const customer = require('../schema/customerSchema')
module.exports = {
    addAdmin: ('/addAdmin', async (req, res) => {
        try {
            // let newAdmin = await admin(req.body);
            //let newAdmin = await admin.findOneAndUpdate({ email: req.body.email }, { $push: { category: req.body } });
            let newAdmin = await admin(req.body);
            newAdmin.save()
            res.send(newAdmin);
        } catch (err) {
            console.log("Error" + err);
        }
    }),
    getAdmin: ('/getAdmin', async (req, res) => {
        try {
            let adminDetails = await admin.find();
            res.json(adminDetails);
        } catch (err) {
            console.log("Error" + err);
        }
    })
}