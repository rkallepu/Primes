'use strict';
var should = require('should'),
    isPrime = require('../PrimesMultiplicationTable/isPrime');
//tests for isPrime function - checking for some random cases
describe('isPrime function Testing', function () {
    describe('testing', function(){
        it('Returns true for prime numbers', function(){
            isPrime(3).should.equal(true);
        });
        it('Returns true for prime numbers', function(){
            isPrime(10).should.equal(false);
        });
        it('Returns true for prime numbers', function(){
            isPrime(9007199254740881).should.equal(true);
        });
    });
});