const inquirer = require('inquirer');

const prompts = [
    {
        input: 'input',
        name: 'text',
        message: 'Enter up to 3 characters for your SVG text'
    },
    {
        input: 'list',
        name: 'shape',
        message: 'What shape would you like?',
        choices: ['Square', 'Triangle', 'Circle']
    }

]

inquirer.prompt(prompts)
.then((data) => {
    console.dir(data)
})