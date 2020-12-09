const router = require("express").Router();
const { showPreviousLeavesById, showAllLeavesToManager, approveLeaveById,disapproveLeaveById } = require("./leaves.manager.controller");

// router.get("/reviewLeaves");
 router.get("/previousLeaves/:id", showPreviousLeavesById);
 router.get("/leaves",showAllLeavesToManager)
 router.get("/approve/:id/", approveLeaveById);   //TODO:this employee id belongs to logged in manager
 router.get("/disapprove/:id/", disapproveLeaveById);//TODO:this employee id belongs to logged in manager

module.exports = router;