'use strict';
var getPrimes = require('./PrimesMultiplicationTable/getPrimes'),
    primesTable = require('./PrimesMultiplicationTable/primesTable'),
    noPrimes, args;

    //getting the noofprimes from command line arguments
    args = process.argv.slice(2);
    if(args[0]){
        noPrimes = args[0];
        console.log('Primes Multiplication Table for first : ' + args[0] + ' Prime numbers');
    }else{
        //default 10 primes if noofprimes is not mentioned
        noPrimes = 10;
        console.log('Multiplication Table for first 10 prime numbers');
    }
    //console.log(primes(noPrimes));
    //Printing to the console in a table format
    primesTable(getPrimes(noPrimes)).forEach(function (row) {
        console.log(row.join('\t'));
    });