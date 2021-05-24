const Employee = require("./Employee");
const fs = require('fs');
// const template = fs.readFileSync("../index.html", 'utf-8')

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
    renderHTML(){
        return `
        <div class="card col-3">
                <div class="card-header">
                Engineer 
                </div>
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <ul class="list-group">
                        <li class="list-group-item">ID - ${this.id}</li>
                        <li class="list-group-item">Email - <a href="mailto:${this.email}">${this.email}</a></li>
                        <li class="list-group-item">GitHub - <a href="https://github.com/${this.github}" target="_blank">${this.github}</a></li>
                    </ul>
                </div>
            </div>
        `
    }
}

// const rod = new Engineer("Rod Blanco", 1, "rod@rod.com", "rodgithub");
// const rod2 = new Engineer("Rod Blanco", 2, "rod@rod.com", "rodgithub");
// const rod3 = new Engineer("Rod Blanco", 3, "rod@rod.com", "rodgithub");

// const emps = [rod, rod2, rod3];

// const empCards = emps.map(a => a.renderHTML()).join('\n')
// fs.writeFileSync("./test.html", template.replace("{{employees}}", empCards))

module.exports = Engineer;