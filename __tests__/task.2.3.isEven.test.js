describe('Task 2.3: Function isEven', () => {
    test('should return true for even numbers and false for odd numbers', () => {
        const { isEven } = require('../script.js');
        expect(isEven(4)).toBe(true);
        expect(isEven(7)).toBe(false);
        expect(isEven(0)).toBe(true);
        expect(isEven(-2)).toBe(true);
        expect(isEven(-3)).toBe(false);
    });
});
