type Stack<T> = {
  top: T;
  rest: Stack<T> | null;
};

const myStack: Stack<number> = {
  top: 1,
  rest: {
    top: 2,
    rest: {
      top: 3,
      rest: null,
    },
  },
};
