const { fetchAllLeavesWithId, fetchLeavesStatusNA, getAppliedbyIdFromId, getEmployeeIdNameWithUserId, updateApproveLeaveById, fetchUserWithEmployeeid, updateDispproveLeaveById} = require("./leaves.service");

module.exports={
    showPreviousLeavesById: function(req, res){
        const userid = req.params.id;
        console.log(userid);
        fetchAllLeavesWithId(userid,(error, result)=>{
            if(error){
                console.log(error);
                return (res.status(500).json({
                    success:0,
                    message:"Database connection error"
                }));
            }
            res.render("previousLeaves",{records:result});
           
        });
    },
    showAllLeavesToManager: function(req, res){
        const statusvalue="NA";
        fetchLeavesStatusNA(statusvalue,(error, result)=>{
            if(error){
                console.log(error);
                return (res.status(500).json({
                    success:0,
                    message:"Database connection error"
                }));
            }
            res.render("managerhomepage",{records:result});
        });
    },
    approveLeaveById: function(req, res){
        const uid = req.params.id;
        let newuid = Number(uid);
        console.log("uid: "+uid+typeof uid);
        
        const loggedinmanagerid = req.session.loginemployeeid;
        console.log("manager id "+loggedinmanagerid+typeof loggedinmanagerid);
        getAppliedbyIdFromId(newuid,(error, result)=>{  //idk why i am getting json [object Object] as a result so iam converting it into json then eextracting the value
            if(error){
                console.log(error);
                return (res.status(500).json({
                    success:0,
                    message:"Database connection error"
                }));
            }
            let appliedbynewuid = JSON.stringify(result);
            let obj = JSON.parse(appliedbynewuid);
            console.log(obj);
            
           
        });
        fetchUserWithEmployeeid(loggedinmanagerid,(error, result)=>{
            if(error){
                console.log(error);
                return (res.status(500).json({
                    success:0,
                    message:"Database connection error"
                }));
            }
            let managerid = Number(result[0].id);
            console.log("newuid: "+newuid+typeof newuid);
            
            console.log("new manager id: "+managerid+typeof managerid);
                                    //6         //5->1
            updateApproveLeaveById(managerid,newuid,(error, result)=>{
                if(error){
                    console.log(error);
                    return (res.status(500).json({
                        success:0,
                        message:"Database connection error"
                    }));
                }
                return (res.status(200).json({
                    success:0,
                    message:"update success",
                    res: result
                }).end());
                //res.redirect("/managerhomepage/leaves");
            });
       // });
        });
    },
    disapproveLeaveById: function(req, res){
        const uid = req.params.id;
        let newuid = Number(uid);
        console.log("uid: "+uid+typeof uid);
        console.log("newuid: "+newuid+typeof newuid);
        const loggedinmanagerid = req.session.loginemployeeid;
        console.log("manager id "+loggedinmanagerid+typeof loggedinmanagerid);

        fetchUserWithEmployeeid(loggedinmanagerid,(error, result)=>{
            if(error){
                console.log(error);
                return (res.status(500).json({
                    success:0,
                    message:"Database connection error"
                }));
            }
            let managerid = Number(result[0].id);
            
            //console.log("new manager id: "+managerid+typeof managerid);
            updateDispproveLeaveById(managerid,newuid,(error, result)=>{
                if(error){
                    console.log(error);
                    return (res.status(500).json({
                        success:0,
                        message:"Database connection error"
                    }));
                }
                return (res.status(200).json({
                    success:0,
                    message:"update success",
                    res: result
                }).end());
                //res.redirect("/managerhomepage/leaves");
            });
        });
    }

}