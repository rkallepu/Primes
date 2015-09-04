'use strict';
//Returns an array of n prime numbers
var isPrime = require('./isPrime'),
    getPrimes = function (n){
    var primes = [];
    for(var i=1; primes.length < n; i+=1){
        if(isPrime(i)) primes.push(i);
    }
    return primes;
};
module.exports = getPrimes;