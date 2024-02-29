import Graph from "./graph";

const contains = (arr, val) => {
  const array = JSON.stringify(arr);
  const value = JSON.stringify(val);
  const inside = array.indexOf(value) !== -1;
  return inside;
};

const graphBFS = (graph, curr, target, queue, visited) => {
  // target found
  if (curr === target) {
    return [curr];
  }

  visited.push(curr);
  graph.addVertex(curr);

  // Add child nodes that haven't been visited yet
  const moves = graph
    .getAdjacencyList(curr)
    .filter((move) => !contains(visited, move) && !contains(queue, move)); // No duplicate moves, all unvisited
  queue.unshift(...moves);

  if (queue.length > 0) {
    const next = queue.pop();
    return [curr, ...graphBFS(graph, next, target, queue, visited)];
  }
  return null;
};

const knightMoves = (start, target) => {
  const chessGraph = new Graph();
  console.log(graphBFS(chessGraph, start, target, [], []));
};

const start = [2, 3];
const target = [5, 6];
knightMoves(start, target);
