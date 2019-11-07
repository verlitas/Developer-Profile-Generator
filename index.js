const fs = require("fs")
const axios = require("axios")
const inquirer = require("inquirer")
const dotenv = require("dotenv")
const electron = require("electron")
const open = require("open")

// const writeFileAsync = util.promisify(fs.writeFile);
const profile = {}
const questions = [{
    type: "input",
    name: "username",
    message: "Enter your GitHub username: ";
},
{
    type: "list",
    name: "color",
    message: "What is your favorite color?",
    choices: ["green", "blue", "pink", "red"],
}];

async function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const queryURL = `https://api.github.com/users/${response.username}`;
            axios.get(queryURL).
                then((response) => {
                    profile.username = username;
                    profile.image = response.data.avatar_url;
                    profile.name = response.data.name;
                    profile.location = response.data.location;
                    profile.company = response.data.company;
                    profile.gitUrl = response.data.html_url;
                    profile.bio = response.data.bio;
                    profile.repos = response.data.public_repos;
                    profile.followers = response.data.followers;
                    profile.following = response.data.following;

                    axios.get(`https://api.github.com/users/${username}/starred`).then((response) => {
                        profile.stars = response.data.length;
                    })
                })
        })
}