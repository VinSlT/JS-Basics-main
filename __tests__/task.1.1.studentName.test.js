describe('Task 1.1: Variable studentName', () => {
    test('should have a variable studentName with value "John Doe"', () => {
        const { studentName } = require('../script.js');
        expect(studentName).toBe('John Doe');
    });
});
