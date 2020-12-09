const router = require("express").Router();
const { newLeave, viewAllMyLeaves } = require("./leaves.controller")
router.post("/applyLeave",newLeave);
router.get("/myLeaves",viewAllMyLeaves);


module.exports = router;