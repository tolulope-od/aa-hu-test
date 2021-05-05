let { multiply, add } = require('..');

describe('Functional tests', () => {
  describe('multiply tests', () => {
    it('should multiply two numbers', () => {
      expect(multiply(2, 4)).toEqual(8);
    });
  });

  describe('add tests', () => {
    it('should add two numbers', () => {
      expect(add(10, 14)).toEqual(24);
    });
  });
})