 class ShapeProperties {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }

}

class Circle {
    constructor(shapeProperties) {
        this.shapeProperties = shapeProperties;
    }
    render() {
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle
            cx="150"
            cy="100"
            r="80"
            fill="${this.shapeProperties.shapeColor}"
        />
        <text 
            x="150" 
            y="105" 
            text-anchor="middle" 
            font-size="40" 
            fill="${this.shapeProperties.textColor}" 
            dominant-baseline="middle">${this.shapeProperties.text}
        </text>
        </svg>
        `
    }
}

class Triangle {
    constructor(shapeProperties) {
        this.shapeProperties = shapeProperties;
    }
    render() {
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon
            fill="${this.shapeProperties.shapeColor}"
            points="60, 180, 150, 10, 240, 180"
        />
        <text
            x="150"
            y="130"
            text-anchor="middle"
            fill="${this.shapeProperties.textColor}"
            font-size="40">${this.shapeProperties.text}
        </text>
        </svg>        
        `
    }
}

class Square {
    constructor(shapeProperties) {
        this.shapeProperties = shapeProperties;
    }
    render() {
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect
            x="75"
            y="25"
            width="150"
            height="150"
            fill="${this.shapeProperties.shapeColor}"
        />
        <text
            x="150"
            y="115"
            text-anchor="middle"
            font-size="40"
            fill="${this.shapeProperties.textColor}">${this.shapeProperties.text}
        </text>
        </svg>
        `
    }
}

module.exports = { Circle, Square, Triangle, ShapeProperties };