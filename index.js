const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const template = fs.readFileSync("./index.html", 'utf-8')


function startProg() {
    startHtml

}
const classes = {
    Engineer,
    Intern,
    Manager
}

const additionalQ = {
    Engineer: "What is their Github username?",
    Intern: "What is their School?",
    Manager: "What is their office number?"
}

const employees = [];
addEmployee();
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
            inquirer.prompt(
                {
                    type: "input",
                    name: "info",
                    message: additionalQ[role]
                }
            )
                .then(({ info }) => {
                    const newEmp = new classes[role](name, id, email, info);
                    employees.push(newEmp)
                    
                    inquirer
                        .prompt([
                            {
                                type: 'list',
                                name: 'additionalMembers',
                                message: 'Add another team member?',
                                choices: ['yes', 'no']
                            },
                        ])
                        .then(({ info, additionalMembers }) => {
                           
                            if (additionalMembers == "yes") {
                                addEmployee();

                            } else{
                                const empCards = employees.map(a => a.renderHTML()).join('\n')
                                fs.writeFileSync("./Team-Page.html", template.replace("{{employees}}", empCards))
                            }
                        })
                })
        });
}

function startHtml() {
    template;


}


startProg();