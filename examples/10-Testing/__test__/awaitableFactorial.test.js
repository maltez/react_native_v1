const { assert: { equal} } = require('chai');
const fn = require('../src/awaitableFactorila');

it('Input 3 expected 6', async () => {
    const input = 3;
    const expected = 6;

    const actual = await fn(input);

    equal(actual, expected);
});
