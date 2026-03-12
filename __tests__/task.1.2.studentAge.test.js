describe('Task 1.2: Variable studentAge', () => {
    test('should have a variable studentAge with value 20', () => {
        const { studentAge } = require('../script.js');
        expect(studentAge).toBe(20);
    });
});
