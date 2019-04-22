const factorial = require('../src/asyncFactorial');
const { equal } = require('assert');

it('Input 1 expected 1', (done) => {
    const input = 1;
    const expected = 1;

    factorial(input, (actual) => {
        equal(actual, expected, 'Wrong factorial calculation');
        done();
    });
});