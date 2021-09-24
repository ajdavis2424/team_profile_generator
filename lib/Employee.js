// MAKE CLASS
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name
    }

    getId() {
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole() {
        return "Employee";
}
}
// module.exports so we can use this file elsewhere
module.exports = Employee;