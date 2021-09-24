
const Employee = require("/Users/alexanderdavis/Desktop/bootcamp/team_profile_generator/lib/Employee.js");

describe("Employee", () => {
    // CAN IT BE INSTANTIATED?
    test("Can we instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof e).toBe("object");
    });

//    Line 14 "ASSEMBLE-- LINE 15 ACTING LINE 16 ASSERTING  "
    test("Can set name via constructor arguments", () => {
        const name = "Rob";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    test("Can we get email via constructor arguments", () => {
        const testValue = "test@test.con";
        const e = new Employee("Foo", 1, testValue);
        expect(e.email).toBe(testValue);
    });

    test("Can get name via getName()", () => {
        const testValue = "Alexis";
        const e = new Employee(testValue);
        expect(e.getName()).toBe(testValue);
    });

    test("Can set ID via constructor argument", () => {
        const testValue = 100;
        const e = new Employee("Foo", testValue);
        expect(e.id).toBe(testValue);
    });
});