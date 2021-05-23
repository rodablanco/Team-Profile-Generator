const { expect, it } = require("@jest/globals");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe ("Employee class", () => {
    it("should extend from employee parent class", ()=> {
       expect(Object.getPrototypeOf(Engineer)).toBe(Employee)

    })
    it("should receive a name for employee as a param, and assign name to the 'name' property", ()=> {
        const emp = new Engineer ("rod");
        expect(emp.name).toBe("rod");
    });

    it("should create property id", () => {
        const emp = new Engineer ("rod", "222");
        expect(emp.id).toBe("222");
    })
    it("should create property email", () => {
        const emp = new Engineer ("rod", "222", "test@test.com");
        expect(emp.email).toBe("test@test.com");
    })
    it("should create github username", () => {
        const emp = new Engineer ("","","","rodablanco");
        expect(emp.github).toBe("rodablanco");
    })
})