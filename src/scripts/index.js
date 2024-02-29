import Graph from "./graph";

const objEquals = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

const contains = (arr, val) => {
  const array = JSON.stringify(arr);
  const value = JSON.stringify(val);
  const inside = array.indexOf(value) !== -1;
  return inside;
};

const graphBFS = (graph, curr, target, queue) => {
  // target found
  if (objEquals(curr, target)) {
    return graph.getPath(curr);
  }

  // Visit current node
  graph.visit(curr);

  // Add child nodes
  const moves = graph.getAdjacencyList(curr).filter((move) => {
    if (!contains(queue, move)) {
      if (JSON.stringify(move) in graph.verticies) {
        if (graph.verticies[JSON.stringify(move)].visited) {
          return false;
        }
        return true;
      }
      return true;
    }
    return false;
  });

  moves.forEach((move) => {
    graph.addVertex(move, curr);
  });
  queue.unshift(...moves);

  if (queue.length > 0) {
    const next = queue.pop();
    return graphBFS(graph, next, target, queue);
  }
  return null;
};

const knightMoves = (start, target) => {
  const chessGraph = new Graph();
  chessGraph.addVertex(start, null);
  return graphBFS(chessGraph, start, target, []);
};

console.log(JSON.stringify(knightMoves([0, 0], [3, 3])));
console.log(JSON.stringify(knightMoves([3, 3], [0, 0])));
console.log(JSON.stringify(knightMoves([0, 0], [7, 7])));
console.log(JSON.stringify(knightMoves([7, 7], [0, 0])));
