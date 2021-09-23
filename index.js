// AFTER FOLDERS ADDED, npm init to create json's 
// npm install inquirer
// npm install jest

const render = require ("./src/page_template.js");
// BRING IN fs
const fs = require("fs");

// path will get info to dist index file
const path = require("path");

// OUTPUT DIRECTORY-- resolve from computer to directory you want it to go
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "index.html");

// CLASSES!
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Array of classes below
const team = [
    newManager("Alex", 1, "alex@alex.com"),
    newEngineer("Rob", 2, "rob@rob.com", "Rob@github"),
    newIntern("Jax", 3, "jax@jax.com"), "HCC",
    newManager("Noel", 6, "noel@yeeks.com"),
    newEngineer("Jeff", 4, "jeff@jeff.com", "Jeff@github"),
    newIntern("John", 5, "john@john.com", 'U of Tampa')
];

// WRITE TO FILE
fs.writeFileSync(outputPath, render(team), "utf-8");
