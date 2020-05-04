const inquirer = require('inquirer');
let fs = require('fs');
let axios = require('axios');
let generateHTML = require('generateHTML.js');
let path = require('path');

inquirer
.prompt([
    {
        type: "input",
        message: "What is your Github Username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your Email?",
        name: "email"   
    },
    {
        type: "input",
        message: "What is your project URL?",
        name: "projectUrl"   
    },
    {
        type: "input",
        message: "What is your project Name?",
        name: "projectName"    
    },
    {
        type: "input",
        message: "What is your project Description?",
        name: "description"
    },
    {
        type: "list",
        message: "What kind of license your project want?",
        name: "license",
        choices: ["MIT",
         "Apache 2.0", 
         "BSD 3", 
         "GPL 3.0", 
         "None"]
    },
])
.then(response => {

    let data = `Name: ${response.username}, email:  ${response.email}, Project URL: ${response.projectUrl}`;
    //"Name: " + response.username + " email " + response.email + " Project URL " + response.projectUrl
    
    console.log(data);
    fs.appendFile("Readme.md", JSON.stringify(data), function(err){
        if(err){
            return console.log("error");
        }else{
            console.log("success");
        }
    });

    // const queryUrl = `https://api.github.com/users/${response.username}`;
    // axios
    // .get(queryUrl)
    // .then(res => {
    //     const data = res.data;
    // })
});

function writeToFile (filename, data){
    fs.writeFileSync("Readme.md",response)

}