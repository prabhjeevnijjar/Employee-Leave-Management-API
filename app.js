const express = require("express");
var mysql = require("mysql");
const bodyParser = require("body-parser");
var session = require('express-session');
const ejs = require("ejs");
require("dotenv").config();
var MySQLStore = require('express-mysql-session')(session);
const userRouter = require("./api/users/user.router");
const employeeleaveRouter = require("./api/leaves/leaves.employee.router");
const managerleaveRouter = require("./api/leaves/leaves.manager.router");

const app = express();

app.set("view engine", "ejs");

let options = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'leave_application'
};
let sessionStore = new MySQLStore(options);
app.use(session({
    secret: 'ssshhhhh',
    // create new MYSQL store.
    store: sessionStore,
    saveUninitialized: false,
    resave: false
}));
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));

app.use("/homepage",userRouter);
app.use("/employeeHomepage",employeeleaveRouter);
app.use("/managerhomepage",managerleaveRouter);

app.get("/homepage",(req, res)=>{
    let sess = req.session;
    if(sess.loginemployeeid) {
        return res.redirect('/employeeHomepage');
    }
    res.render("homepage")
});
app.get("/employeeHomepage",(req, res)=>{
    res.render("employeeHomepage")
});
app.get("/managerhomepage",(req, res)=>{
    res.redirect("/managerhomepage/leaves")
});
app.get("/adminHomepage",(req, res)=>{
    res.render("adminHomepage")
});
app.get('/logout',(req,res) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/');
    });

});
app.listen(process.env.PORT,function(){
    console.log("Server started at port: "+process.env.PORT);
});