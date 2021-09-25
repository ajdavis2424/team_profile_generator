const Engineer = require("../lib/Engineer");

describe("Engineer",() => {
    test("Can we instantiate Engineer?",() => {
        const type = new Engineer();
        expect(typeof type).toBe("object");
    })
})

describe("Engineer Name",() => {
    test("Is Engineer Name a usable string?",() => {
        const name = Engineer.name;
        expect(typeof name).toBe("string");
    })
})



// test("Can get github via getGithub()", () => {
//     const testValue = 4;
//     const e = new Engineer(testValue);
//     expect(e.getGithub()).toBe(testValue);
// });