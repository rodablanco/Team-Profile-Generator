const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole(){
        return "Manager"
    }
    renderHTML(){
        return `
        <div class="card col-3">
                <div class="card-header">
                    ${this.name}
                </div>
                <div class="card-body">
                    <h5 class="card-title">Manager</h5>
                    <ul class="list-group">
                        <li class="list-group-item">ID - ${this.id}</li>
                        <li class="list-group-item">Email -<a href="mailto:${this.email}">${this.email}</a></li>
                        <li class="list-group-item">Office Number - ${this.officeNumber}</li>
                    </ul>
                </div>
            </div>
        `
    }
}


module.exports = Manager;