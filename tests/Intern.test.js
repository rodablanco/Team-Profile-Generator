const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");


describe ("Employee class", () => {
    it("should extend from employee parent class", ()=> {
       expect(Object.getPrototypeOf(Intern)).toBe(Employee)

    })
    it("should receive a name for employee as a param, and assign name to the 'name' property", ()=> {
        const emp = new Intern ("rod");
        expect(emp.name).toBe("rod");
    });

    it("should create property id", () => {
        const emp = new Intern ("rod", "222");
        expect(emp.id).toBe("222");
    })
    it("should create property email", () => {
        const emp = new Intern ("rod", "222", "test@test.com");
        expect(emp.email).toBe("test@test.com");
    })
    it("should create school", () => {
        const emp = new Intern ("","","","UCI");
        expect(emp.school).toBe("UCI");
    })
})