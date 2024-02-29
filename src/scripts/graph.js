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

export default class Graph {
  constructor() {
    this.adjacencies = {};
  }

  addVertex(newPos) {
    this.adjacencies[newPos] = new LinkedList(newPos);

    // Add all possible moves
    moves.forEach((move) => {
      const adjPos = [newPos[0] + move[0], newPos[1] + move[1]];

      if (adjPos[0] >= 0 && adjPos[0] < 8 && adjPos[1] >= 0 && adjPos[1] < 8) {
        console.log(adjPos);
        this.adjacencies[newPos].addItem(adjPos);
      }
    });
  }
}
