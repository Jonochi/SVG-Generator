class ShapeProperties {
    constructor(shapeColor, characters, charColor) {
        this.shapeColor = shapeColor;
        this.characters = characters;
        this.charColor = charColor;
    }

}

class Circle {
    constructor(shapeProperties) {
        this.shapeProperties = ShapeProperties;
    }
    render() {
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle
            cx="150"
            cy="10"
            r="80"
            fill="${this.shapeProperties.shapeColor}"
        />
        <text 
            x="150" 
            y="125" 
            text-anchor="middle" 
            font-size="60" 
            fill="${this.shapeProperties.charColor}" 
            dominant-baseline="middle">${this.shapeProperties.characters}
        </text>
        </svg>
        `
    }
}

class Triangle {
    constructor(shapeProperties) {
        this.shapeProperties = ShapeProperties;
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
            y="120"
            text-anchor="middle"
            fill="${this.shapeProperties.charColor}"
            font-size="30">${this.shapeProperties.characters}"
        </text>
        </svg>        
        `
    }
}

class Square {
    constructor(shapeProperties) {
        this.shapeProperties = ShapeProperties;
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
            y="110"
            text-anchor="middle"
            font-size="30"
            fill="${this.shapeProperties.charColor}">${this.shapeProperties.characters}
        </text>
        </svg>
        `
    }
}