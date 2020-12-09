const { addUser,fetchUser  }=require("./user.service");
module.exports={
    addNewUser:function(req, res){
        const body = req.body;
         
        //console.log(req.session.employeeid);
        addUser(body,(error,result)=>{
            if(error){
                console.log(error);
                return (res.status(500).json({
                    success:0,
                    message:"Database connection error"
                }));
            }
            return (res.status(200).json({
                success:1,
                message:"Insertion success"
            }));
        });
    },
    getUser:function(req, res){         

        const body = req.body;
        let x = req.session.loginemployeeid = req.body.logineid;
        fetchUser(body,(error,result)=>{
            if(error){
                console.log(error);
                return (res.status(500).json({
                    success:0,
                    message:"Database connection error"
                }));
            }
            if(result.length==0){
                return (res.status(404).json({      
                    success:0,
                    message:"Invalid credentils !"
                }));
            }else{
            return (res.status(200).json({      
                success:1,
                message:"User found in database",
                cook: x
            }));
        }
        });
    }
}