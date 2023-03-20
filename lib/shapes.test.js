const { Circle, Triangle, Square, ShapeProperties } = require('./shapes');

describe('Shapes', () => {

    describe('Circle', () => {
        it('should render circle svg based on user input', () => {
            //arrange
            const properties = new ShapeProperties('blue', 'foo', 'pink');
            const cirle = new Circle(properties);
            const expected = `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle
            cx="150"
            cy="100"
            r="80"
            fill="blue"
        />
        <text 
            x="150" 
            y="105" 
            text-anchor="middle" 
            font-size="40" 
            fill="pink" 
            dominant-baseline="middle">foo
        </text>
        </svg>
        `;

            //act
            const actual = cirle.render();

            //assert
            expect(actual).toBe(expected);
        });
    });
    describe('Square', () => {
        it('should create square object', () => {
            const shape = new Square('red', 'foo', 'blue')
            expect(shape === null).toBeFalsy()
        });
    });
    describe('Circle', () => {
        it('should create triangle object', () => {
            const shape = new Triangle('red', 'foo', 'blue')
            expect(shape === null).toBeFalsy()
        });
    });

});

    describe('Shape Properties', () => {
        it('should pass properties to the object', () => {
            //arrange
            const expected = new ShapeProperties('red', 'foo', 'blue');

            //act
            const actual = new Circle(expected);

            //assert
            expect(actual.shapeProperties).toBe(expected);
        });
    });
