// MAKE CLASS & EXTEND FROM EMPLOYEE!
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // super calls in parent (employee) properties so we dont haveto re-write this.name etc
        super(name, id, email);
        this.school = school;
    }
    
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}
// module.exports so we can use this file elsewhere
module.expoorts = Intern;