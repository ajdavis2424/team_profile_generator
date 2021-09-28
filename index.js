// AFTER FOLDERS ADDED, npm init to create json's 
// npm install inquirer
// npm install jest

const render = require ("./src/page_template.js");
// BRING IN fs
const fs = require("fs");

// path will get info to dist index file
const path = require("path");

// CLASSES!
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { inherits } = require("util");
const inquirer = require("inquirer");
// const { isTypedArray } = require("util/types");
// const { isTypedArray } = require("util/types"); idArray

// OUTPUT DIRECTORY-- resolve from computer to directory you want it to go
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "index.html");

const team = [];
const idArray =[];
function writeFile(team){
// WRITE TO FILE
fs.writeFileSync(outputPath, render(team), "utf-8");
}

function init(){
    // inquirer
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message:"what is the team manager's name?",
            validate: answer => {
                if (answer !== ''){
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            type: "input",
            name: "managerId",
            message:"what is the team manager's ID number?",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass){    
                return true;
                }
                return "Please enter a positive number greater than zero.";
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message:"what is the team manager's email address?",
            validate: answer => {
                const pass = answer.match(
                    /\S+@\S+\.\S+/
                );
                if (pass){    
                return true;
                }
                return "Please enter a valid email address.";
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message:"what is the team manager's office number?",
            validate: answer => {
                const pass = answer.match(
                    /^[1-9]\d*$/
                );
                if (pass){    
                return true;
                }
                return "Please enter a positive number greater than zero.";
            
        }
        }
    ]).then(answers => {
        const manager = new Manager(
            answers.managerName, 
            answers.managerId, 
            answers.managerEmail, 
            answers.managerOfficeNumber);
        team.push(manager);
        // writeFile(team)
        // isTypedArray.push(answers.managerId); idArray
        createTeam();

    });
}

function createTeam(){
    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members",
            ],
        },
    ]).then(userChoice => {
        switch (userChoice.memberChoice) {
            case "Engineer":
                addEngineer();
                break;
                case "Intern":
                    addIntern();
                    break;
                    default:
                    writeFile(team);   
                    // buildTeam();
        }
    });
}

    function addEngineer() {
        
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "what is the engineer's name?",
                validate: answer => {
                if (answer !==""){
                    return true;
                }
                return "Please enter at least one character";
            }
        },
        {
                type: "input",
                name: "engineerId",
                message: "what is the engineer's id?",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                        );
                        if (pass) {
                            if(idArray.includes(answer)){
                                return "This ID is already taken. Please select a differnet number...";
                            }   else{
                                return true;
                            }
                    }
                    return "Please enter a positive number greater than zero";
                }
            },
            {
                    type: "input",
                    name: "engineerEmail",
                    message: "What is the engineer's email?",
                    validate: answer => {
                        const pass = answer.match(
                            /\S+@\S+\.\S+/);
                            if (pass) {
                                return true;
                                 }   
                                 return "Please enter a vild email address";
                            }
                    },
                    {
                            type: "input",
                            name: "engineerGithub",
                            message: "what is the engineer's Github username?",
                            validate: answer => {
                                if (answer !==""){
                                    return true;
                                }
                                return "Please enter at least one character";
                            }
                        }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
            team.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        })
    }

    function addIntern() {
        
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "what is the Intern's name?",
                validate: answer => {
                if (answer !==""){
                    return true;
                }
                return "Please enter at least one character";
            }
        },
        {
                type: "input",
                name: "internId",
                message: "what is the engineer's id?",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                        );
                        if (pass) {
                            if(idArray.includes(answer)){
                                return "This ID is already taken. Please select a differnet number...";
                            }   else{
                                return true;
                            }
                    }
                    return "Please enter a positive number greater than zero";
                }
            },
            {
                    type: "input",
                    name: "internEmail",
                    message: "What is the Intern's email?",
                    validate: answer => {
                        const pass = answer.match(
                            /\S+@\S+\.\S+/);
                            if (pass) {
                                return true;
                                 }   
                                 return "Please enter a vild email address";
                            }
                    },
                    {
                            type: "input",
                            name: "internSchool",
                            message: "what is the intern's school?",
                            validate: answer => {
                                if (answer !==""){
                                    return true;
                                }
                                return "Please enter a college or university";
                            }
                        }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
            team.push(intern);
            idArray.push(answers.internSchool);
            createTeam();
        })
    }

// Array of classes below
// const team = [
//     new Manager("Alex", 1, "alex@alex.com"),
//     new Engineer("Rob", 2, "rob@rob.com", "Rob@github"),
//     new Intern("Jax", 3, "jax@jax.com", "HCC",),
//     new Manager("Noel", 6, "noel@yeeks.com"),
//     new Engineer("Jeff", 4, "jeff@jeff.com", "Jeff@github"),
//     new Intern("John", 5, "john@john.com", 'U of Tampa')
// ];

init();