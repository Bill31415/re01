const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1", 
  user: "root",
  password: "root",  // replace this with your password for your Mysql 
  database: "csc3170_project", //replace this with your schema 
});

module.exports = db