'use strict';
//returns the multiplication table of primes as a 2-dimensional array
var primesTable = function (primes){
    var output = new Array(),
        start;
    output[0] = new Array();
    //push the primes as the first row
    output[0].push(' ');
    primes.forEach(function(prime){
        output[0].push(prime);
    });
    //calculating only half products in the table - remaining half is the transpose
    for(var i = 1; i <= primes.length; i += 1){
        output[i] = new Array();
        start = primes[i - 1];
        output[i].push(start);
        for(var j = 0; j < i; j += 1) {
            output[i].push(start * primes[j]);
            output[j][i] = output[i][j];
        }
    }
    return output;
};
module.exports = primesTable;