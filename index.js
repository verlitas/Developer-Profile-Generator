const fs = require("fs"), axios = require("axios"), inquirer = require("inquirer"), dotenv = require("dotenv"), electron = require("electron"), electronHTML = require("electron-html-to"), open = require("open");


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

function writeToFile(fileName, data) {

}

function init() {

    init()
};



//what functions will i need?
// 1. Git Hub 
//a. profile image
//b. username
//c.location/githubprofile/userblog
//d. user bio
//e. # of public repos/followers/stars/following