describe('Task 2.1: Function greet', () => {
    test('should return "Hello, [name]!" with the provided name', () => {
        const { greet } = require('../script.js');
        expect(greet('Alice')).toBe('Hello, Alice!');
        expect(greet('Bob')).toBe('Hello, Bob!');
    });
});
