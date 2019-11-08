const fs = require("fs")
const axios = require("axios")
const inquirer = require("inquirer")
const convertFactory = require("electron-html-to")
const open = require("open")
const generateHTML = require("./generateHTML")
const conversion = convertFactory({
    converterPath: convertFactory.converters.PDF
});


// const writeFileAsync = util.promisify(fs.writeFile);
const data = {}
const questions = [{
    type: "input",
    name: "username",
    message: "Enter your GitHub username: ",
},
{
    type: "list",
    name: "color",
    message: "What is your favorite color?",
    choices: ["green", "blue", "pink", "red"],
}];

init();
function init() {
    inquirer
        .prompt(questions)
        .then(function ({ username, color }) {
            const queryURL = `https://api.github.com/users/${username}`;
            axios.get(queryURL).
                then((response) => {
                    switch (color) {
                        case "green":
                            data.color = 0;
                            break;
                        case "blue":
                            data.color = 1;
                            break;
                        case "pink":
                            data.color = 2;
                            break;
                        case "red":
                            data.color = 3;
                            break;
                    }
                    data.username = username;
                    data.image = response.data.avatar_url;
                    data.name = response.data.name;
                    data.location = response.data.location;
                    data.company = response.data.company;
                    data.gitUrl = response.data.html_url;
                    data.bio = response.data.bio;
                    data.repos = response.data.public_repos;
                    data.followers = response.data.followers;
                    data.following = response.data.following;

                    axios.get(`https://api.github.com/users/${username}/starred`).then((response) => {
                        data.stars = response.data.length;
                    });
                    const resume = generateHTML(data);
                    conversion({ html: resume }, function (err, result) {
                        if (err) throw err;
                        console.log(err);
                        result.stream.pipe(fs.createWriteStream("output/resume.pdf"));
                        conversion.kill();
                        open("output/resume.pdf");
                    });
                });

        })
}