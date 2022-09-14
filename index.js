const fs = require('fs'); 
const inquirer = require('inquirer');

const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 


const employeeTeam = []; 

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?', 
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email.",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number",
        }
    ])
    .then(managerData => {
        const  { name, id, email, officeNumber } = managerData; 
        const manager = new Manager (name, id, email, officeNumber);

        employeeTeam.push(manager);  
    })
};

const addEmployee = () => {

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What type of employee are you adding?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the new employees name?", 
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the school the intern is enrolled in or graduated from",
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
 
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        employeeTeam.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(employeeTeam); 
        } else {
            return employeeTeam;
        }
    })

};


// function to generate HTML page
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // if the profile is created succesfully 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(employeeTeam => {
    return generateHTML(employeeTeam);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });