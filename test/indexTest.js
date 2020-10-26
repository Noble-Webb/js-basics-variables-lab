const chai = require('chai')
const expect = chai.expect;
const fs = require('file-system')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('babel-core');

const js = fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')


//This example shows that the test expects companyName to equal Scuber. That expect and to.equal are essentially doing the same thing as companyName == 'Scuber'.
//describe is a function provided by our test library, Mocha, and it's used to hold our tests. After the word describe is information about our tests.

describe('index.js', function () {
  describe('companyName', function () {
    it('is set as Scuber', function () {
      //test is below 
      expect(companyName).to.equal('Scuber');
    });

    it('is defined as a const', function () {
      expect(js).to.match(/const companyName/, "Expected companyName to be a const");
    });
  });

  describe('mostProfitableNeighborhood', function () {
    it('is declared as equal to Chelsea', function () {
      expect(mostProfitableNeighborhood).to.equal('Chelsea');
    });

    it('does not raise error if the mostProfitableNeighborhood is changed', function () {
      expect(function () { mostProfitableNeighborhood = 'Upper West Side' }).to.not.throw(TypeError);
    });
  });

  describe('companyCeo', function () {
    it('is declared as equal to Susan Smith', function () {
      expect(companyCeo).to.equal('Susan Smith');
    });

    it('does not raise error if the companyCeo is changed', function () {
      expect(function () { companyCeo = 'Lauren Hart' }).to.not.throw(TypeError);
    });
  });
});
