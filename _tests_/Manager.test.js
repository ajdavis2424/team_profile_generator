const Manager = require("../lib/Manager");

test("Can get office number via getOfficeNumber()", () => {
    const testValue = 4;
    const e = new Manager(testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

// test("Can get ID via constructor argument", () => {
//     const testValue = 100;
//     const e = new Employee("Foo", testValue);
//     expect(e.id).toBe(testValue);
// });
// });