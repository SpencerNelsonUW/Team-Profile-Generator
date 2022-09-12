const inquirer = require("inquirer")
const fs = require("fs")
const generateHTML = require('./Src/generateHTML');


//Here is my array of questions
const questions = [
        {
            type: "input",
            message: "What is your team manager's name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "manager ID",
            name: "managerID"
        },
        {
            type: "input",
            message: "manager email address",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "manager office number",
            name: "managerName"
        },
        {
            type: "input",
            message: "What is your team manager's name?",
            name: "managerName"
        },
        {
            type:"list",
            message:"Would you like to add another team member?",
            name:"teamMember1",
            choices:["Engineer", "intern"]
        },    
];


//this function says to write the file based on the filename and data passed in by init
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), (err) => {
        //console.log(fileName)
        //console.log(data)
        if (err)
            console.log(err);
        else {
            console.log("written successfully")
        }
    })
}


function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile(index.html, data);
            //console.log(data)
        })
}

// Function call to initialize app
init();
