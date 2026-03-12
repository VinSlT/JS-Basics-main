describe('Task 1.3: Variable isEnrolled', () => {
    test('should have a variable isEnrolled with value true', () => {
        const { isEnrolled } = require('../script.js');
        expect(isEnrolled).toBe(true);
    });
});
