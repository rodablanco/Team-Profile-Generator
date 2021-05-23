
const { expect, it } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe ("Employee class", () => {
    it("should create obj", () => {
        //create an employee obj from Employee class
        //expect the type of said obj to be "object"
        const emp = new Employee();
        expect(typeof emp).toBe("object");
    });

    it("should receive a name for employee as a param, and assign name to the 'name' property", ()=> {
        const emp = new Employee ("rod");
        expect(emp.name).toBe("rod")
    });

    it("should create property id", () => {
        const emp = new Employee ("rod", "222");
        expect(emp.id).toBe("222")
    })
    it("should create property email", () => {
        const emp = new Employee ("rod", "222", "test@test.com");
        expect(emp.email).toBe("test@test.com")
    })

    it("should have a getName() method that returns the name of the employee", ()=> {
        const name = "HelloKitty";
        const emp = new Employee(name);
        expect(emp.getName()).toBe(name)
    })
    it("should have a getID() method that retunrs the employee ID", ()=> {
        const id = "111";
        const emp = new Employee("", id);
        expect(emp.getID()).toBe(id)
    })
    it("should have a getEmail() method that returns the email", () => {
        const email = "email@email.com";
        const emp = new Employee('','',email)
        expect(emp.getEmail()).toBe(email)
    })
    
})