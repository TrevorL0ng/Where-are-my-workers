// Bringing in modules needed
const mysql = require("mysql2");
require("dotenv").config();
const inquirer = require("inquirer");
const conTable = require("console.table");

// Creating local server connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
  
  connection.connect((err) => {
    if (err) {
      throw err;
    }
  
    console.log('Connected!');
  });