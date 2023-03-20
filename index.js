const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square, ShapeProperties }  = require('./lib/shapes.js');

// Accepts user inputs for acustom logo
const prompts = [
    {
        input: 'input',
        name: 'text',
        message: 'Enter up to 3 characters for your SVG text'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like?',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'list',
        name: 'shapeColor',
        message: 'What color would you like your shape?',
        choices: ['blue', 'black', 'green']
    },
    {
        type: 'list',
        name: 'textColor',
        message: 'What color would you like your text?',
        choices: ['pink', 'orange', 'white']
    },


]

// Creates the SVG based on user inputs
function init() {
    inquirer
        .prompt(prompts)
        .then((data) => {
            // Formats user text to uppercase 3 characters
            let formattedText = (data.text).toUpperCase();
            if (formattedText.length > 3) {
                formattedText = formattedText.substring(0, 3);
            }

            let shapeInfo = new ShapeProperties(data.shapeColor, formattedText, data.textColor);
            console.dir(shapeInfo);
            let shape;
            if (data.shape === "Square") {
                shape = new Square(shapeInfo);
            } else if (data.shape === "Circle") {
                shape = new Circle(shapeInfo);
            } else if (data.shape === "Triangle") {
                shape = new Triangle(shapeInfo);
            }

            fs.writeFile(`./examples/${data.shape}.svg`, shape.render() , () => {
                console.log('Success!');
            })
        })
    
}

init();