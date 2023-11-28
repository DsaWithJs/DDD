/**
 * problem
 */
namespace ss {
  const sayMessage = (message: string): string => `Simon says ${message}`;

  // extending the parameter type scope with a Union type
  const sayMessage1 = (message: string | number): string => `Simon says ${message}`;

  // not the best approach
  const sayMessage3 = (message: string | number | null): string => `Simon says ${message}`;

  // not the best approach
  const sayMessage4 = (message: any): string => `Simon says ${message}`;
}

/**
 * There is a better solution.
 */
/**
 * Implementing Type Variables as Function Parameters
 */
namespace ss {
  // leveraging a simple Generic Type
  // as a function parameter (lambda)
  const sayMessage = <T extends unknown>(message: T): string => `Simon says ${message}`;

  // leveraging a simple Generic Type
  // as a function parameter (non-lambda)
  function sayMessage1<T>(message: T): string {
    return `Simon says ${message}`;
  }

  sayMessage("hello"); // returns 'Simon says hello'
  sayMessage(1); // returns 'Simon says 1'
  sayMessage(null); // returns 'Simon says null'

  // returning the generic type
  // in the return expression of the function
  const sayMessage2 = <T extends unknown>(message: T): [string, T] => [`Simon says ${message}`, message];
  sayMessage("hello"); // returns [ 'Simon says hello', 'hello' ]
}
/**
 * Constraining the Types in a Generic
 */
namespace ss {
  // Generic Constraints via extending keyof another type or variable
  enum messages {
    greeting = "hello",
    farewell = "bye",
    love = "I love you",
  }
  const sayMessage = <M, T extends keyof M>(messages: M, message: T): [string, T] => [`Simon says ${messages[message]}`, message];
  // returns [ 'Simon says bye', 'farewell' ]
  sayMessage(messages, "farewell");
}
/**
 * Using an Interface to constraint a Generic
 */
namespace ss {
  // Generic Constraints via interface extension
  interface IMessage<M> {
    message: M;
    emotion: string;
  }
  const sayMessage = <T extends IMessage<string>>(message: T): [string, T] => [`Simon says ${message.message}${message.emotion}`, message];
  // returns [ 'Simon says welcome!', { message: 'welcome', emotion: '!' } ]
  console.log(sayMessage({ message: "welcome", emotion: "!" }));
}
