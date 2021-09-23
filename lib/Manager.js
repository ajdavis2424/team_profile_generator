// MAKE CLASS & EXTEND FROM EMPLOYEE!
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // super calls in parent (employee) properties so we dont haveto re-write this.name etc
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}
// module.exports so we can use this file elsewhere
module.expoorts = Manager;