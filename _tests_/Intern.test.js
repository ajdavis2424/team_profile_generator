const Intern = require("../lib/Intern");

describe("Intern",() => {
    test("Can we instantiate Intern?",() => {
        const type = new Intern();
        expect(typeof type).toBe("object");
    })
})

describe("Intern Name",() => {
    test("Is Intern Name a usable String",() => {
        const name = Intern.name;
        expect(typeof name).toBe(`string`);
    })
})




// test("Can get school via getSchool()", () => {
//     const testValue = "Howard University";
//     const e = new Intern(testValue);
//     expect(e.getSchool()).toBe(testValue);
// });