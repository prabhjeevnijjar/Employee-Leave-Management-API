const { createPool } = require("mysql");

const pool = createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
    //port:process.env.DB_PORT,
    connsectionLimit:10
});
module.exports = pool;