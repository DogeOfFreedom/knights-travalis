import Node from "./node";

const traverseList = (node) => {
  if (node === null) {
    return [];
  }
  return [node.data, ...traverseList(node.next)];
};

export default class LinkedList {
  constructor(coord) {
    this.coord = coord;
    this.listHead = null;
    this.listTail = null;
  }

  addItem(coord) {
    // empty list
    if (this.listHead === null) {
      this.listHead = new Node(coord);
      this.listTail = this.listHead;
    } else {
      this.listTail.next = new Node(coord);
      this.listTail = this.listTail.next;
    }
  }

  getItems() {
    return traverseList(this.listHead);
  }
}
