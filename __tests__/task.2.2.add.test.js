describe('Task 2.2: Function add', () => {
    test('should return the sum of two numbers', () => {
        const { add } = require('../script.js');
        expect(add(2, 3)).toBe(5);
        expect(add(10, 15)).toBe(25);
        expect(add(-5, 5)).toBe(0);
    });
});
