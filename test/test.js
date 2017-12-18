const chai = require('chai');
const App = require('../task/lesson1');

const assert = chai.assert;

describe('App module', () => {
  describe('reverse', () => {
    it('Should reverse array, and return resulting array', () => {
      const result = App.reverse([34, 80, 100, 'request']);
      assert.equal(result[0], 'request');
    });
    it('Should reverse array, and return resulting array', () => {
      const result = App.reverse([34, 80, 100, 'request']);
      assert.equal(result[1], 100);
    });
    it('Should reverse array, and return resulting array', () => {
      const result = App.reverse([34, 80, 100, 'request']);
      assert.equal(result[2], 80);
    });
    it('Should reverse array, and return resulting array', () => {
      const result = App.reverse([34, 80, 100, 'request']);
      assert.equal(result[3], 34);
    });
  });
  describe('indexOf', () => {
    it('should return position of element (1)', () => {
      assert.equal(App.indexOf([45, 67, 'some', {}, [], undefined], 67), 1);
    });
    it('should return position of element (2)', () => {
      assert.equal(App.indexOf([45, 67, 'some', {}, [], undefined], 'some'), 2);
    });
    it('should return position of element (6)', () => {
      assert.equal(App.indexOf([45, 67, 'some', {}, [], undefined], undefined), 5);
    });
    it('should return position of element (-1)', () => {
      assert.equal(App.indexOf([45, 67, 'some', {}, [], undefined], {}), -1);
    });
    it('should return position of element (-1)', () => {
      assert.equal(App.indexOf([45, 67, 'some', {}, [], undefined], []), -1);
    });
  });
  describe('lastIndexOf', () => {
    it('should return position from end of element (1)', () => {
      assert.equal(App.lastIndexOf([45, 67, 'some', {}, [], undefined], 67), 5);
    });
    it('should return position from end of element (-1)', () => {
      assert.equal(App.lastIndexOf([45, 67, 'some', {}, [], undefined], []), -1);
    });
    it('should return position from end of element (1)', () => {
      assert.equal(App.lastIndexOf([45, 67, 'some', {}, [], undefined], undefined), 1);
    });
    it('should return position from end of element (-1)', () => {
      assert.equal(App.lastIndexOf([45, 67, 'some', {}, [], undefined], {}), -1);
    });
  });
  describe('includes', () => {
    it('should return false', () => {
      assert.equal(App.includes([34, 66, {}, 'string'], []), false);
    });
    it('should return true', () => {
      assert.equal(App.includes([34, 66, {}, 'string'], 66), true);
    });
    it('should return true', () => {
      assert.equal(App.includes([34, 66, {}, 'string'], 'string'), true);
    });
  });
});
