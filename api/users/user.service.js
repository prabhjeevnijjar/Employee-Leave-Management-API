const pool = require("../../config/db");

module.exports={
    addUser:function(data, callback){
        pool.query(
            "INSERT INTO users(employeeid, name, role, password) VALUES(? ,?, ?, ?)",
            [
                data.eid,
                data.name,
                data.role,
                data.password
            ],
            (error, result, fields )=>{
                if(error) {
                    return callback(error);
                } 
                return callback(null,result); 
            });
    },
    fetchUser:function(data, callback){
        pool.query(
            "SELECT * FROM users WHERE(name=? AND password=? AND employeeid=?)",
            [
                data.loginname,
                data.loginpassword,
                data.logineid
            ],
            (error, result, fields )=>{
                if(error) {
                    return callback(error);
                } 
                return callback(null,result); 
            }
        )
    },
    fetchUserByEmployeeId:function(data, callback){
        pool.query(
            "SELECT * FROM users WHERE(employeeid=?)",
            [
                data.logineid
            ],
            (error, result, fields )=>{
                if(error) {
                    return callback(error);
                } 
                return callback(null,result); 
            }
        )
    }
    
}