// AFTER FOLDERS DDED, npm init to create json's 
// npm install inquirer
// npm install jest

const render = require ("./src/page_template.js");
const team = [
    {
        name: "Alex", 
        id: 1,
        email: "alex@alex.com",
        role: "manager",
    },
    {
        name: "Rob", 
        id: 2,
        email: "rob@rob.com",
        role: "engineer",
    },
    {
        name: "Jax", 
        id: 3,
        email: "Jax@jax.com",
        role: "intern",
    },
];
console.log(render(team));