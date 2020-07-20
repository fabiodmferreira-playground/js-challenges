const findShortestPath = require('./findShortestPath');
describe('findShortestPath', () => {
  it('should return the shortest path', () => {
    const nodes = 5;
    const from = [1, 1, 2, 3];
    const to = [2, 3, 4, 5];
    const ids = [1, 2, 3, 3, 2];

    expect(findShortestPath(nodes, from, to, ids, 2)).toEqual(3)
  })
});
