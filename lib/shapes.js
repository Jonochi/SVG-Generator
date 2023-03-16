// Triangle, circle and square classes

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
    render () {
        return `<svg width="400" height="400" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="150"
          cy="150"
          r="140"
          fill="${this.shapeProperties.shapeColor}"
          stroke-width="5"
        />
        <text 
        x="150" 
        y="150" 
        text-anchor="middle" 
        font-size="100" 
        fill="${this.shapeProperties.charColor}}" 
        dominant-baseline="middle">
        ${this.shapeProperties.characters}</text>
        `
    }
}