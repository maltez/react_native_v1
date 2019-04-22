const fn = require('./factorial');

const factorial = (n) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const result = fn(n);
            return res(result);
        }, 500);
    });
}

module.exports = factorial;