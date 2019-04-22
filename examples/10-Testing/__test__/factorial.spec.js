const factorial = require('../src/factorial');
const { expect } = require('chai');

describe('Factorial returns multiplication of all integer include given value', () => {
    it('Given 5 Factorial function returns 120', () => {
        const input = 5;

        expect(120).to.be.equal(factorial(input));
    });

    it('Given 0 function returns 1', () => {

    });

    it('Given 1 function returns 1', () => {

    });

    it('Given 2 function returns 2', () => {

    });

    it('Given 3 function returns 6', () => {

    });
});

describe('Errors in factorial functionality', () => {
    it('When input string function should throw invalid type exception', () => {

    });

    it('When input negative number function should throw range error exception', () => {

    });
});