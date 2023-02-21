// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    // validate: validateInput,
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of your project.",
    // validate: validateInput,
  },
  {
    type: "input",
    name: "motivation",
    message:
      "Provide a short description explaining the what, why, and how of your project.",
    // validate: validateInput,
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
    // validate: validateInput,
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use.",
    // validate: validateInput,
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license for this project.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Apache 2.0",
      "Boost Software 1.0",
      "MIT",
      "Mozilla",
    ],
    // validate: validateInput,
  },
  {
    type: "input",
    name: "contributions",
    message: "How can users contribute to your project?",
    // validate: validateInput,
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
    // validate: validateInput,
  },
  {
    type: "input",
    name: "userEmail",
    message: "What is your GitHub email address that contributors may contact?",
    validate: function (value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return true;
      } else {
        return "Not a valid email address. Please enter a valid email address.";
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

// TODO: Create a function to initialize app
function init() {}
inquirer.prompt(questions).then((data) => {
  console.log(JSON.stringify(data, null, " "));
  //   data.getLicense = getLicense(data.license);
  writeToFile("./example/README.md", data);
});

// Function call to initialize app
init();
