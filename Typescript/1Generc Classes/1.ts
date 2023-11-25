namespace ss {
  class Queue<T> {
    private items: T[];

    constructor() {
      this.items = [];
    }
    enqueue(item: T): void {
      this.items.push(item);
    }
    dequeue(): T {
      return this.items.shift();
    }
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  }

  let numQueue = new Queue<number>(); // numQueue is a queue of numbers
  let strQueue = new Queue<string>(); // strQueue is a queue of strings
  let objQueue = new Queue<{ name: string; age: number }>(); // objQueue is a queue of objects
}
