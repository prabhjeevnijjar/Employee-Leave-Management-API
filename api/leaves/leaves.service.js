const pool = require("../../config/db");

module.exports={
    addLeave:function(data,idid, callback){
        pool.query(
            "INSERT INTO leaves( appliedby, employeename, description, startdate, enddate  ) VALUES(? ,?, ?, ?, ?)", 
            [   idid,
                data.employeename,
                data.description,
                data.startdate,
                data.enddate
            ],(error, result, fields )=>{
                if(error) {
                    return callback(error);
                } 
                return callback(null,result); 
            });
    },
    fetchAllLeavesWithId:function(data, callback){
        pool.query(
            "SELECT * FROM leaves WHERE appliedby = ?",[data],(error, result, fields )=>{
                if(error) {
                    return callback(error);
                } 
                return callback(null,result); 
            }
        )
    },
    updateApproveById:function(data,callback){
        pool.query(
            "UPDATE leaves SET status=?,reviewedby=? WHERE id=?",[],(error, result, fields )=>{
                if(error) {
                    return callback(error);
                } 
                return callback(null,result); 
            }
        )
    },
    getEmployeeIdNameWithUserId:function(data, callback){
        pool.query(
            "SELECT employeeid,name FROM users WHERE id=?",[data],(error, result, fields )=>{
                if(error) {
                    return callback(error);
                } 
                return callback(null,result); 
            }
        )
    },
    getUserIdWithEmployeeId:function(data, callback){
        pool.query(
            "SELECT id FROM users WHERE employeeid=?",[data],(error, result, fields )=>{
                if(error) {
                    return callback(error);
                } 
                return callback(null,result); 
            }
        )
    },
    fetchLeavesStatusNA:function(data,callback){
        pool.query(
            "SELECT * FROM leaves WHERE status=?",[data],(error, result, fields )=>{
                if(error) {
                    return callback(error);
                } 
                return callback(null,result); 
            }
        )
    },
    fetchUserWithEmployeeid:function(data, callback){
        pool.query(
            "SELECT id FROM users WHERE employeeid = ?",[data],(error, result, fields )=>{
                if(error) {
                    return callback(error);
                } 
                return callback(null,result); 
            }
        )
    },
    getAppliedbyIdFromId:function(data, callback){
        pool.query(
            "SELECT * FROM leaves WHERE id = ?",[data],(error, result, fields )=>{
                if(error) {
                    return callback(error);
                } 
                return callback(null,result); 
            }
        )
    },                              //6`    //5
    updateApproveLeaveById:function(data1,data2, callback){// TODO: GET APPLIED ID FROM ID IN LEAVES
        //data1 = manager id
        //data2 = user id
        const x = Number(data1);
        const y = Number(data2);
        const data3 = "Approved";
        const z = String(data3);
        pool.query(
            "UPDATE leaves SET status=?,reviewedby=? WHERE appliedby=?",[z,x,y],(error, result, fields )=>{
                if(error) {
                    return callback(error);
                } 
                return callback(null,result); 
            }
        )
    },
    updateDispproveLeaveById:function(data1,data2, callback){// TODO: GET APPLIED ID FROM ID IN LEAVES
        //data1 = manager id
        //data2 = user id
        const x = Number(data1);
        const y = Number(data2);
        const data3 = "Disapprove";
        const z = String(data3);
        pool.query(
            "UPDATE leaves SET status=?,reviewedby=? WHERE appliedby=?",[z,x,y],(error, result, fields )=>{
                if(error) {
                    return callback(error);
                } 
                return callback(null,result); 
            }
        )
    }
}