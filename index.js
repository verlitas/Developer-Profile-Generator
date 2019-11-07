const fs = require("fs")
const axios = require("axios")
const inquirer = require("inquirer")
const dotenv = require("dotenv")
const electron = require("electron")
const open = require("open")

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username: "
        }
    ]).then((response) => {
        const queryURL = `https://api.github.com/users/${response.username}/repos?per_page=100`;

        axios.get(queryURL).then((response) => {
            
        })
    })
}

async function init() {
    try {
        const data = await promptUser();
        const html = generateHTML(data);
        await writeFileAsync("profile.html", html);
        console.log("successfully wrote to profile.html")
    } catch (err) {
        console.log(err);
    }
}
init();