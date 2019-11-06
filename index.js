const fs = require("fs")
const axios = require("axios") 
const inquirer = require("inquirer")
const dotenv = require("dotenv")
const electron = require("electron")
const open = require("open")

const writeFileAsync = util.promisify(fs.writeFile);


const questions = [{
    type: "input",
    message: "Enter your GitHub username: ",
    name: "username"
},
{
    type: "list",
    message: "Choose your favorite color out of these options. ",
    name: "color",
    choices: [
        "green",
        "pink",
        "red",
        "blue"
    ]
}];

function generateHTML(fileName, data) {

    // Git Hub 
    //a. profile image
    //b. username
    //c.location/githubprofile/userblog
    //d. user bio
    //e. # of public repos/followers/stars/following
}