import LinkedList from "./linkedList";

const moves = [
  [1, 2],
  [2, 1],
  [-1, 2],
  [-2, 1],
  [1, -2],
  [2, -1],
  [-1, -2],
  [-2, -1],
];

const traverseGraph = (verticies, start) => {
  const { prev } = verticies[JSON.stringify(start)];
  if (prev === null) {
    return [start];
  }
  return [...traverseGraph(verticies, prev), start];
};
export default class Graph {
  constructor() {
    this.verticies = {};
  }

  getAdjacencyList(pos) {
    return this.verticies[JSON.stringify(pos)].adjacencies.getItems();
  }

  addVertex(newPos, prev) {
    const pos = JSON.stringify(newPos);
    this.verticies[pos] = {
      adjacencies: new LinkedList(newPos),
      prev,
      visited: false,
    };

    // Add all possible moves
    moves.forEach((move) => {
      const adjPos = [newPos[0] + move[0], newPos[1] + move[1]];

      if (adjPos[0] >= 0 && adjPos[0] < 8 && adjPos[1] >= 0 && adjPos[1] < 8) {
        this.verticies[pos].adjacencies.addItem(adjPos);
      }
    });
  }

  visit(pos) {
    this.verticies[JSON.stringify(pos)].visited = true;
  }

  getPath(node) {
    return traverseGraph(this.verticies, node);
  }
}
