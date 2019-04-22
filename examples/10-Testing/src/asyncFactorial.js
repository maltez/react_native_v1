const fn = require('./factorial');

const factorial = function(n, cb) {
    setTimeout(() => {
        const fact = fn(n);
        cb(fact);
    }, 500);
};

module.exports = factorial