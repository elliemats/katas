/* global , describe, it, expect, should */

describe('TEST: rowSumOddNumbers(i)', function () {
  'use strict';

  it('should be a function', function () {
    expect(rowSumOddNumbers).to.be.a('function');
  });

  it('should output custom error for invalid input', function () {
    expect(rowSumOddNumbers(5.36)).to.equal('Invalid row. Input a whole number.');
  });

  it('should return 8 when index is equal to 2', function () {
    expect(rowSumOddNumbers(2)).to.equal(8);
  });

  it('should return a number', function () {
    expect(typeof rowSumOddNumbers(2)).to.equal('number');
  });
hgv
});