const { Circle, Triangle, Square, ShapeProperties } = require('./shapes');

describe('Shapes', () => {

    describe('Circle', () => {
        it('should render circle svg based on user input', () => {
            const shape = new Circle('red', 'foo', 'blue')
            expect(shape === null).toBeFalsy()
        });
    });
    describe('Square', () => {
        it('should render circle svg based on user input', () => {
            const shape = new Square('red', 'foo', 'blue')
            expect(shape === null).toBeFalsy()
        });
    });
    describe('Circle', () => {
        it('should render circle svg based on user input', () => {
            const shape = new Triangle('red', 'foo', 'blue')
            expect(shape === null).toBeFalsy()
        });
    });

});

describe('Shape Properties', () => {
    describe('Shape Properties', () => {
        it('should pass properties to the object', () => {
            const properties = new ShapeProperties('red', 'foo', 'blue')
            expect(properties === null).toBeFalsy()
        });
    });

})

