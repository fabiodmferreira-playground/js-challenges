const splitIntoTwo = require('./splitIntoTwo');

describe('splitIntoTwo', function () {
  it('should return 0 if no argument is passed', () => {
    expect(splitIntoTwo()).toEqual(0);
  })

  it('should work with 3 items', () => {
    // expect(splitIntoTwo([1, 2, 3])).toHaveLength(6);
    expect(splitIntoTwo([1, 2, 3])).toEqual(2)
  })

  it('should work with 4 items', () => {
    const actual = splitIntoTwo([1, 2, 3, 4]);
    const expected = [[[1], [2, 3, 4]], [[1, 2], [3, 4]], [[1, 2, 3], [4]], [[1, 2, 4], [3]], [[1, 3], [2, 4]], [[1, 3, 4], [2]], [[1, 4], [2, 3]], [[2], [1, 3, 4]], [[2, 3], [1, 4]], [[2, 3, 4], [1]], [[2, 4], [1, 3]], [[3], [1, 2, 4]], [[3, 4], [1, 2]], [[4], [1, 2, 3]]];

    // expect(actual).toHaveLength(14);
    // expect(actual).toEqual(expected);

    expect(actual).toEqual(6)

  });
  it('should split array in two', () => {
    expect(splitIntoTwo([10, 4, -8, 7])).toEqual(7);
    expect(splitIntoTwo([4, 10, -8, 7])).toEqual(7);
    expect(splitIntoTwo([4, -8, 10, 7])).toEqual(7);
  })
});
