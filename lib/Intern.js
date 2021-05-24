const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole(){
        return "Intern"
    }
    renderHTML(){
        return `
        <div class="card col-3">
                <div class="card-header">
                Intern 
                </div>
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <ul class="list-group">
                        <li class="list-group-item">ID - ${this.id}</li>
                        <li class="list-group-item">Email -  <a href="mailto:${this.email}">${this.email}</a></li>
                        <li class="list-group-item">School - ${this.school}</li>
                    </ul>
                </div>
            </div>
        `
    }
}

module.exports = Intern;