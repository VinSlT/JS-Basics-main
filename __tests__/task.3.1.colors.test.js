describe('Task 3.1: Array colors', () => {
    test('should have an array colors with exactly three strings: "red", "green", "blue"', () => {
        const { colors } = require('../script.js');
        expect(Array.isArray(colors)).toBe(true);
        expect(colors.length).toBe(3);
        expect(colors[0]).toBe('red');
        expect(colors[1]).toBe('green');
        expect(colors[2]).toBe('blue');
    });
});
