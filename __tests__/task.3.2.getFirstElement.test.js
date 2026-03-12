describe('Task 3.2: Function getFirstElement', () => {
    test('should return the first element of an array', () => {
        const { getFirstElement } = require('../script.js');
        expect(getFirstElement([1, 2, 3])).toBe(1);
        expect(getFirstElement(['a', 'b', 'c'])).toBe('a');
        expect(getFirstElement([true, false])).toBe(true);
    });
});
