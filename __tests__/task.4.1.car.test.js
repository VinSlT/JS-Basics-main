describe('Task 4.1: Object car', () => {
    test('should have an object car with properties brand, model, and year', () => {
        const { car } = require('../script.js');
        expect(typeof car).toBe('object');
        expect(car.brand).toBe('Toyota');
        expect(car.model).toBe('Camry');
        expect(car.year).toBe(2020);
    });
});
