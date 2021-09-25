const Manager = require("../lib/Manager");

describe("Manager",() => {
    test("Can we instantiate Manager Instance",() => {
        const type = new Manager();
        expect(typeof type).toBe(`object`);
    })
})

describe("Manager Name",() => {
    test("Is Manager Name a usable String",() => {
        const name = Manager.name;
        expect(typeof name).toBe("string");
    })
})

// test("Can get ID via constructor argument", () => {
//     const testValue = 100;
//     const e = new Employee("Foo", testValue);
//     expect(e.id).toBe(testValue);
// });
// });