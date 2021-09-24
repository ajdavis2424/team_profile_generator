const Engineer = require("../lib/Engineer");

test("Can get github via getGithub()", () => {
    const testValue = 4;
    const e = new Engineer(testValue);
    expect(e.getGithub()).toBe(testValue);
});