const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const template = fs.readFileSync("./index.html", 'utf-8')
const emps = [];

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
// const http = require('http');
// const PORT = 8080;
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
    // const empCards = emps.map(info => info.renderHTML()).join('\n')
    // fs.writeFileSync("./test.html", template.replace("{{employees}}", empCards))

}

// function addHtml(){
//     return new Promise(function(resolve, reject){
//         const empCards = emps.map(info => info.renderHTML()).join('\n')
//         if(Engineer == true){
//             Engineer.renderHTML();
//         } else if (Intern == true){
//             Intern.renderHTML();
//         } else {
//             Manager.renderHTML();
//         }
//         console.log("member addition");
//         fs.appendFile("./test.html", template.replace("{{employees}}", data, function(err) {
//             if (err) {
//                 return reject(err);
//             }
//             return resolve();
//         }))

//     })

// }

// const handleRequest = (req, res) => {
//     fs.readFile(`${__dirname}/index.html`, (err, data) => {
//         if (err) throw err;

//         res.writeHead(200, { 'Content-Type' : 'text/html'});
//         res.end(data);
//     });
// };
// const server = http.createServer(handleRequest);

// server.listen(PORT, () => {
//     console.log(`Server is listening on PORT: http://localhost:${PORT}`);
// })


windows.open(startProg());