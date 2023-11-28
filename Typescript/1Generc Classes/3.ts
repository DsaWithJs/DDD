namespace ss {
  class Stack<T> {
    private elements: T[] = [];
    push(element: T): void {
      this.elements.push(element);
    }
    pop(): T | undefined {
      return this.elements.pop();
    }
  }

  const numberStack = new Stack<number>();
  numberStack.push(1);
  numberStack.push(2);

  // Popped value will be of type number
  const poppedNumber = numberStack.pop();
  const stringStack = new Stack<string>();
  stringStack.push("hello");
  stringStack.push("world");

  // Popped value will be of type string
  const poppedString = stringStack.pop();
}
