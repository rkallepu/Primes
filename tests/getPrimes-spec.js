'use strict';
var should = require('should'),
    getPrimes = require('../PrimesMultiplicationTable/getPrimes');
//Tests for getPrimes function - checking for some random cases
describe('getPrimes function Testing', function () {
    describe('testing', function(){
        it('Returns first 5 prime numbers', function(){
            getPrimes(5).length.should.equal(5);
        });
        it('Returns first 5 prime numbers', function(){
            getPrimes(5).join().should.equal('2,3,5,7,11');
        });
        it('Returns one prime number', function(){
            getPrimes(1).length.should.equal(1);
        });
        it('Returns one prime number', function(){
            getPrimes(1).join().should.equal('2');
        });
        it('Returns first 10 prime numbers', function(){
            getPrimes(10).length.should.equal(10);
        });
        it('Returns first 10 prime numbers', function(){
            getPrimes(10).join().should.equal('2,3,5,7,11,13,17,19,23,29');
        });
    });
});