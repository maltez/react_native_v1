const { equal, throws } = require('assert');
const factorial = require('../src/factorial');

test('Input 5 Expect 120', () => {
    // Arrange
    const input = 5;
    const expectedResult = 120;
    // Act 
    const actualResult = factorial(input);
    // Assert
    equal(actualResult, expectedResult, 'Wrong factorial calculation result')
});

test('Input 0 Expect 1', () => {
    // Arrange
    const input = 0;
    const expectedResult = 1;
    // Act 
    const actualResult = factorial(input);
    // Assert
    equal(actualResult, expectedResult, 'Wrong factorial calculation result')
});

test('Input 1 Expect 1', () => {
    // Arrange
    const input = 1;
    const expectedResult = 1;
    // Act 
    const actualResult = factorial(input);
    // Assert
    equal(actualResult, expectedResult, 'Wrong factorial calculation result')
});

test('Input 2 Expect 2', () => {
    // Arrange
    const input = 2;
    const expectedResult = 2;
    // Act 
    const actualResult = factorial(input);
    // Assert
    equal(actualResult, expectedResult, 'Wrong factorial calculation result')
});

test('Input 3 Expect 6', () => {
    // Arrange
    const input = 3;
    const expectedResult = 6;
    // Act 
    const actualResult = factorial(input);
    // Assert
    equal(actualResult, expectedResult, 'Wrong factorial calculation result')
});

test('Input -1 Expect Error', () => {
    // Arrange
    const input = -1;
    // Act & Assert
    throws(() => {
        factorial(input);
    });
});