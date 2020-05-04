const inquirer = require('inquirer');
const { writeFileSync } = require('fs');
let generateHTML = require('./generateHTML.js');
const path = require('path');

const userData = [
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
         "Apache", 
         "BSD", 
         "GPL", 
         "None"]
    },
    {
        type: "input",
        message: "What will need to install dependencies?",
        name: "install",
        default: "npm install",
    },
];


   


function writeToReadme(filename, data){
    const currentPath = process.cwd();
    return writeFileSync(path.join(currentPath, filename),data);

}


function init(){
    inquirer.prompt(userData).then(function(response){
        writeToReadme("Readme.md", generateHTML({ ...response }))
    });
}
init();