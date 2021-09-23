const { TestWatcher } = require("@jest/core");
const { describe } = require("yargs");
const Employee = require("/Users/alexanderdavis/Desktop/bootcamp/team_profile_generator/lib/Employee.js");

describe("Employee", () => {
    // CAN IT BE INSTANTIATED?
    test("Can we instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof e).toBe("object");
    });

});