const assert = require('assert');

describe('Array', () => {
  describe('indexOf', () => {
    it('if not found should return -1', () => {
      assert.equal(-1, [1, 2, 3].indexOf(5));
    });
  });
});
