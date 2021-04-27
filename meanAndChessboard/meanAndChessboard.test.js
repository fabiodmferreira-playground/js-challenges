const meanAndChessboard = require("./meanAndChessboard");

describe("meanAndChessboard", () => {
  it("should set the cells referred in query with the average of the black cell and the white cell", () => {
    const matrix = [
      [1, 2, 3],
      [6, 5, 4],
      [2, 4, 2]
    ];
    const queries = [[1, 1]];

    const actual = meanAndChessboard(matrix, queries);
    const expected = [[1, 2, 3], [6, 5, 3], [3, 4, 2]];

    expect(actual).toEqual(expected);
  })
})
