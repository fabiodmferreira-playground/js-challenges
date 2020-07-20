function searchPath(cursor, graphFrom, graphTo, ids, val) {
  if (ids[graphTo[cursor] - 1] === val) {
    return 1;
  } else {
    const to = graphTo[cursor];
    let paths = [];

    for (let i = 0; i < graphTo.length; i++) {
      if (graphFrom[i] === to) {
        console.log('nested search path', i)
        const path = searchPath(i, graphFrom, graphTo, ids, val);

        if (path > 0) {
          paths.push(path)
        }
      }
    }

    if (!paths.length) {
      return -1;
    }

    return 1 + Math.min(...paths)
  }
}

/*
* For the unweighted graph, <name>:
*
* 1. The number of nodes is <name>Nodes.
* 2. The number of edges is <name>Edges.
* 3. An edge exists between <name>From[i] to <name>To[i].
*
*/
module.exports = function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
  // solve here
  let pathsWeight = [];

  for (let i = 0; i < graphFrom.length; i++) {
    const graphId = graphFrom[i];
    const nodeColor = ids[graphId - 1];
    if (nodeColor === val) {
      const path = searchPath(i, graphFrom, graphTo, ids, val)

      if (path > 0) {
        pathsWeight.push(path);
      }
    }
  }

  for (let i = 0; i < graphTo.length; i++) {
    const graphId = graphTo[i];
    const nodeColor = ids[graphId - 1];
    if (nodeColor === val) {
      console.log('search reverse path',i)
      const path = searchPath(i, graphTo, graphFrom, ids, val)

      if (path > 0) {
        pathsWeight.push(path);
      }
    }
  }

  if (!pathsWeight.length) {
    return -1;
  }

  return Math.min(...pathsWeight);
}
