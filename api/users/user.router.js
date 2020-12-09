const router = require("express").Router();
const { addNewUser,getUser } = require("./user.controller");

router.post("/SignUp",addNewUser);
router.post("/Login",getUser);
module.exports = router;