describe('Task 4.2: Function getFullName', () => {
    test('should return full name in format "firstName lastName"', () => {
        const { getFullName } = require('../script.js');
        expect(getFullName({ firstName: 'John', lastName: 'Doe' })).toBe('John Doe');
        expect(getFullName({ firstName: 'Jane', lastName: 'Smith' })).toBe('Jane Smith');
    });
});
