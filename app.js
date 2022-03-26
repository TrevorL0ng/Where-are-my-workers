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
    goTrack();
  });

  // Creation of the main function of the application. Big 'ol list time
  function goTrack() {
      inquirer.prompt({
          name:"choice",
          type:"list",
          message:"Welcome to your employee tracker! What would you like to do?",
          choices: [
              "View departments",
              "View roles",
              "View employees",
              "Add department",
              "Add role",
              "Add employee",
              "Update employee",
              "Exit"
          ]
      }).then(function (result){
          switch (result.choice){
            case "View departments":
              seeDept();
              break;
          }

          switch (result.choice){
            case "View roles":
              seeRole();
              break;
          }

          switch (result.choice){
            case "View employees":
              seeEmp();
              break;
          }

          switch (result.choice){
            case "Add department":
              addDept();
              break;
          }
          
          switch (result.choice){
            case "Add role":
              addRole();
              break;
          }
          
          switch (result.choice){
            case "Add employee":
              addEmp();
              break;
          }
          
          switch (result.choice){
            case "Update employee":
              updateEmp();
              break;
          }
          
          switch (result.choice){
            case "Exit":
              seeYa();
              break;
          }
      })
  };
  // Creating all functions listed in above switch choices

    function seeDept() {
      var search = "SELECT * FROM department";
      connection.search(search, function(err, res){
        if (err) throw (err);
        console.table(res);
        goTrack();
      })
    };

    function seeRole() {
      var search = "SELECT * FROM role";
      connection.search(search, function(err, res){
        if (err) throw (err);
        console.table(res);
        goTrack();
      })
    };

    function seeEmp() {
      var search = "SELECT * FROM employee";
      connection.search(search, function(err, res){
        if (err) throw (err);
        console.table(res);
        goTrack();
      })
    };