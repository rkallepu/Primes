'use strict';
//Returns true if a given number is prime, else false
var isPrime = function (n) {
    //base conditions and eliminating the multiples of 2 and 3
    if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false;
    if (n%2 === 0) return (n === 2);
    if (n%3 === 0) return (n === 3);
    var m = Math.sqrt(n);
    //1/3 less divisions by eliminating the multiples of 2 and 3
    for (var i=5;i <= m; i+=6) {
        if (n%i === 0) return false;
        if (n%(i+2) === 0) return false;
    }
    return true;
};
module.exports = isPrime;