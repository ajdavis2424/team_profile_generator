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

// Array of objects below
const team = [
    {
        name: "Alex", 
        id: 1,
        email: "alex@alex.com",
        role: "manager",
    },
    {
        name: "Noel", 
        id: 6,
        email: "noel@yeeks.com",
        role: "manager",
    },
    {
        name: "Rob", 
        id: 2,
        email: "rob@rob.com",
        role: "engineer",
    },
    {
        name: "Jeff", 
        id: 4,
        email: "Jeff@Jeff.com",
        role: "engineer",
    },
    {
        name: "Jax", 
        id: 3,
        email: "Jax@jax.com",
        role: "intern",
    },
    {
        name: "John", 
        id: 5,
        email: "John@john.com",
        role: "intern",
    },
];

// WRITE TO FILE
fs.writeFileSync(outputPath, render(team), "utf-8");
