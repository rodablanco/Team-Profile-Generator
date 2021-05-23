const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


describe ("Employee class", () => {
    it("should extend from employee parent class", ()=> {
       expect(Object.getPrototypeOf(Manager)).toBe(Employee)

    })
    it("should receive a name for employee as a param, and assign name to the 'name' property", ()=> {
        const emp = new Manager ("rod");
        expect(emp.name).toBe("rod");
    });

    it("should create property id", () => {
        const emp = new Manager ("rod", "222");
        expect(emp.id).toBe("222");
    })
    it("should create property email", () => {
        const emp = new Manager ("rod", "222", "test@test.com");
        expect(emp.email).toBe("test@test.com");
    })
    it("should create office number", () => {
        const emp = new Manager ("","","","777");
        expect(emp.officeNumber).toBe("777");
    })
})