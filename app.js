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

  // Functions just to pull existing data

    function seeDept() {
      var query = "SELECT * FROM department";
      connection.query(query, function(err, res){
        if (err) throw (err);
        console.table(res);
        goTrack();
      })
    };

    function seeRole() {
      var query = "SELECT * FROM role";
      connection.query(query, function(err, res){
        if (err) throw (err);
        console.table(res);
        goTrack();
      })
    };

    function seeEmp() {
      var query = "SELECT * FROM employee";
      connection.query(query, function(err, res){
        if (err) throw err;
        console.table(res);
        goTrack();
      })
    };

// Functions to add new data

    function addDept(){
      inquirer.prompt([{
        name: "newDept",
        type: "input",
        message: "Name of new department:"
      }])
      .then(function (answer){
        connection.query("INSERT INTO department SET ?", {
          name: answer.newDept
        });
      console.log("Department added");
      goTrack();   
      })
    };

    function addRole(){
        inquirer.prompt([{
          name:"newRole",
          type:"input",
          message:"Name of new role:"},
          { name:"yrSal",
            type:"input",
            message:"Yearly salary of new role:"},
            { 
              name:"department",
              type:"input",
              message:"Department ID of new role:"
            }])
          .then(function (answer){
           connection.query("INSERT INTO role SET ?", {
              title: answer.newRole,
              salary: answer.yrSal,
              department_id: answer.department
            });
          console.log("Role added");
          goTrack();
          })
        };

    function addEmp(){
      inquirer.prompt([{
        name:"newEmpFirst",
        type:"input",
        message:"First name of new employee:"},
        { name:"newEmpLast",
          type:"input",
          message:"Last name of new employee:"},
          { name:"role",
            type:"input",
            message:"Role ID of new employee:"},
            { name:"manager",
              type:"input",
              message:"New employee's manager ID:"
            }])
            .then(function(answer){
              connection.query("INSERT INTO employee SET ?",{
                first_name: answer.newEmpFirst,
                last_name: answer.newEmpLast,
                role_id: answer.role,
                manager_id: answer.manager
              });
              console.log("Employee added");
              goTrack();
            })
    }
// Function to quit application

    function seeYa(){
      console.log("Goodbye");
      connection.end();
    };