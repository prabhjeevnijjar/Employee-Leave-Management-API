const { addLeave, fetchUser, fetchUserWithEmployeeid,getUserIdWithEmployeeId, fetchAllLeavesWithEmployeeId,fetchAllLeavesWithId  }=require("./leaves.service");
module.exports={
    newLeave:function(req, res){
        const body = req.body;
        const id = req.body.leaveeid;
        
         fetchUserWithEmployeeid(id,(error,result)=>{
            if(error){
                console.log(error);
                return (res.status(500).json({
                    success:0,
                    message:"Database connection error"
                }));
            }
            if(result.length==0){
                return (res.json({
                    success:1,
                    message:"Employee id NOT found",
                   
                }));
            }
            const leaveid = result[0].id;
            addLeave(body,leaveid,(error,result)=>{
                if(error){
                    console.log(error);
                    return (res.status(500).json({
                        success:0,
                        message:"Database connection error"
                    }));
                }
                return (res.status(200).json({
                    success:1,
                    message:"Insertion of leave application success"
                }));
            });
        })
    },
    viewAllMyLeaves:function(req, res){
        const body = req.body;
        let x = req.session.loginemployeeid;
        //x = req.body.logineid;
        console.log(x);

        getUserIdWithEmployeeId(x,(error,result)=>{
            if(error){
                console.log(error);
                return (res.status(500).json({
                    success:0,
                    message:"Database connection error"
                }));
            }
            if(result.length==0){
                return (res.json({
                    success:1,
                    message:"Employee id NOT found",
                   
                }));
            }
            let getid = result[0].id;
            console.log(getid)
            fetchAllLeavesWithId(getid,(error,result)=>{
                if(error){
                    console.log(error);
                    return (res.status(500).json({
                        success:0,
                        message:"Database connection error"
                    }));
                }
                
                res.render("viewleaves",{records: result});
            });
        });       
    }
    
     
        // addUser(body,dataidvariable,(error,result)=>{
        //     if(error){
        //         console.log(error);
        //         return (res.status(500).json({
        //             success:0,
        //             message:"Database connection error"
        //         }));
        //     }
        //     return (res.status(200).json({
        //         success:1,
        //         message:"Insertion success"
        //     }));
        // });
        
       
    // ,
    // getUser:function(req, res){         

    //     const body = req.body;
    //     fetchUser(body,(error,result)=>{
    //         if(error){
    //             console.log(error);
    //             return (res.status(500).json({
    //                 success:0,
    //                 message:"Database connection error"
    //             }));
    //         }
    //         return (res.status(200).json({      TODO:CHECK IF USER EXIST IN DATABSE
    //             success:1,
    //             message:"Insertion success"
    //         }));
    //     });
    // }
    
}