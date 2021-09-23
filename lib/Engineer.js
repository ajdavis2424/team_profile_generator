// MAKE CLASS & EXTEND FROM EMPLOYEE!
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // super calls in parent (employee) properties so we dont haveto re-write this.name etc
        super(name, id, email);
        this.github = github;
    }
    
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}
// module.exports so we can use this file elsewhere
module.expoorts = Engineer;