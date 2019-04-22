const fn = require('./promisifyFactorial');

const factorial = async (n) => {
    const res = await fn(n);

    return res;
};

module.exports = factorial;