import Node from "./node";

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
}
