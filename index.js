// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input"
        name: "title"
        message: "What is the title of your project?"
        validate: validateInput;
    };
    {
        type: "input"
        name: "description"
        message: "Please enter a description of your project."
        validate: validateInput;
    };
    {
        type: "input"
        name: "motivation"
        message: "Provide a short description explaining the what, why, and how of your project."
        validate: validateInput;
    };
    {
        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
