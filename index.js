// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const { right } = require('inquirer/lib/utils/readline');

const questions = [{
    type: 'input',
    name: 'name',
    message: 'enter the name and title of the app',
    validate:(nameInput) =>{
        if(nameInput){
            return true;
        } else {
            console.log("please enter a name")
            return false;
        }
    }
  },{
    type: 'input',
    name: 'description',
    message: 'enter a description for your app',
    validate:(descriptionInput) =>{
        if(descriptionInput){
            return true;
        } else {
            console.log("please enter a description")
            return false;
        }
    }
  },{

  },];

  
// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
     fs.writeFile("./dist/README.md",`# ${answers.name}`)
}

// TODO: Create a function to initialize app
function init() {inquirer
    .prompt(questions)
  
    .then(answers => {answers.name, answers.description
     var README = writeToFile(answers)
    })
    .catch(error => {
      if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });}

// Function call to initialize app
init();
