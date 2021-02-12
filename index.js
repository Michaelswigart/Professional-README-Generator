// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const { right } = require('inquirer/lib/utils/readline');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
  
const questions = [
  // project title
  {
    type: 'input',
    name: 'name',
    message: 'Please enter a name and title for the app (Required)',
    //add validation to make sure user entered the input
    validate:(nameInput) =>{
        if(nameInput){
            return true;
        } else {
            console.log("please enter a name and title")
            return false;
        }
    }
  },
  // project description 
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description about your project',
    //add validation to make sure user entered the input
    validate:(descriptionInput) =>{
        if(descriptionInput){
            return true;
        } else {
            console.log("please enter a description")
            return false;
        }
    }
  },
  // project installation 
  {
    type: 'input',
    name: 'installation',
    message: 'Please give instruction for project: (Required)',
      //add validation to make sure user entered the input
     validate: (installationInput) => {
      if(installationInput){
        return true;
      } else {
        console.log('Please enter the necessary commands for installation');
        return false;
      }
 
 
    },
  },
  // project usage
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide the necessary instructions for the project:(Required)',
    //add validation to make sure user entered the input
    validate: installationCommands => {
      if(installationCommands) {
        return true;
      } else {
        console.log('Please enter the necessary commands for installation')
      }
    }

  },
 // Project License
 {
  type: 'list',
  name: 'license',
  message: "Please choose the license for the project:",
  // Resource: https://choosealicense.com/licenses/
  choices: [
      "GNU GPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
      "BSD 3-Clause"
  ]
},
// Project Contributing
{
  type: 'input',
  name: 'contributing',
  message: "How can one contribute to the project?:(optional)"
  // No validation for optional inputs
  
},
// Project Tests
{
  type: 'input',
  name: 'tests',
  message: "Mention any tests written to test the project:(optional)"
  // No validation for optional inputs
},
 // github username
 {
  type: 'input',
  name: 'username',
  message: "Enter your github username:[Required]",
  validate: username => {
      if (username) {
          return true;
      } else {
          console.log('Please enter the github username');
          return false;
      }
  }
},
 // email
{
  type: 'input',
  name: 'email',
  message: "Enter your email address:[Required]",
  validate: email => {
      if (email) {
          return true;
      } else {
          console.log('Please enter the email address');
          return false;
      }
    }
  }];

// Time said use file name.  fs.writefile
// TODO: Create a function to write README file
function writeToFile(fileName) {
    return fs.writeFile("./dist/README.md",`# ${fileName.name}`) 
    if(err) {
      return console.log(err);
    }
}
// Tim said to work on the functon init
// TODO: Create a function to initialize app
function init() {
  console.log("Welcome please answer the question in the prompt");
     inquirer
    .prompt(questions)
    .then(answers => {
      const readmeContent = generateMarkdown(answers);
      answers.name, answers.description, answers.installation, answers.usage, answers.license, answers.contributing, answers.tests, answers.username, answers.email
      writeToFile("./dist/README.md", readmeContent);
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