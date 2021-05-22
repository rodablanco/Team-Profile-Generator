const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { choices } = require("yargs");
const Employee = require("./lib/Employee");

const http = require('http');
const PORT = 8080;
const emplyees = [];

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter employee's name",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },
            {
                type: 'input',
                name: 'id',
                message: "Enter employee's id",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },
            {
                type: 'list',
                name: 'role',
                message: "Select employee's role",
                choices: ['Manager', 'Engineer', "Intern"],
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter employee's email",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },
        ])
        .then(function ({ name, role, id, email }) {
            let positionInfo = "";
            if (role === "Engineer") {
                positionInfo = "Github username";
            } else if (role === "Intern") {
                positionInfo = "school"
            } else {
                positionInfo = "office number";
            }
            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'positionInfo',
                        message: "Enter team member's name"
                    },
                    {
                        type: 'list',
                        name: 'additionalMembers',
                        message: 'Add another team member?',
                        choices: ['yes', 'no']
                    },


                ])
                .then(({ positionInfo, additionalMembers }) => {
                    let newMember;
                    if (role === "Engineer") {
                        newMember = new Engineer(name, id, email, positionInfo);
                    } else if (role === "Intern") {
                        newMember = new Intern(name, id, email, positionInfo);
                    } else {
                        newMember = new Manager(name, id, email, positionInfo);
                    }
                    employees.push(additionalMembers);
                    
                })
        })
}

// function init() {
    const handleRequest = (req, res) => {
        fs.readFile(`${__dirname}/index.html`, (err, data) => {
            if (err) throw err;

            res.writeHead(200, { 'Content-Type' : 'text/html'});
            res.end(data);
        });
    };
    const server = http.createServer(handleRequest);

    server.listen(PORT, () => {
        console.log(`Server is listening on PORT: ${PORT}`);
    })
// }