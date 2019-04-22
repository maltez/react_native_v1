const {equal} = require('assert');
const factorial = require('../src/promisifyFactorial');

it('Test promisify factorial. Input 5 Expected 120', () => {
    const input = 5;
    const expected = 120;

    return factorial(input)
        .then((actual) => {
            equal(actual, expected);
        });
});

