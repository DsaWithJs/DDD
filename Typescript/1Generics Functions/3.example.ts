class Box<T> {
  private value: T;

  constructor(initialValue: T) {
    this.value = initialValue;
  }

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box(42); // numberBox is of type Box<number>
console.log(numberBox.getValue()); // Output: 42

const stringBox = new Box("Hello, Generics!"); // stringBox is of type Box<string>
console.log(stringBox.getValue()); // Output: "Hello, Generics!"

namespace ss {
  type ButtonSize = "small" | "medium" | "large";

  type ButtonClassNames<T extends ButtonSize> = `button-${T}`;

  function getButtonClassName<T extends ButtonSize>(size: T): ButtonClassNames<T> {
    return `button-${size}`;
  }

  const smallButtonClassName = getButtonClassName("small"); // "button-small"
  const mediumButtonClassName = getButtonClassName("medium"); // "button-medium"
  const largeButtonClassName = getButtonClassName("large"); // "button-large"
}

namespace ss {
  type KeyPattern<T extends string, U extends Record<string, string | number>> = {
    [P in `${T}${Capitalize<Extract<keyof U, string>>}`]: U[P extends `${T}${Capitalize<infer K>}` ? K : never];
  };

  type User = {
    id: number;
    name: string;
    email: string;
  };

  type PrefixedUser = KeyPattern<"user", User>;

  const user: PrefixedUser = {
    userId: 123,
    userName: "John",
    userEmail: "john@example.com",
  };
}

/**
 * Type-safe attribute selectors
 */
namespace ss {
  type Attribute = "id" | "class" | "data-test";
  type AttributeSelector = `[${Attribute}]`;

  function queryElementByAttribute<T extends HTMLElement>(selector: AttributeSelector): T[] {
    const elements = document.querySelectorAll<T>(selector);
    return Array.from(elements);
  }

  const idSelector: AttributeSelector = "[id]";
  const elementsById = queryElementByAttribute<HTMLDivElement>(idSelector);

  const dataTestSelector: AttributeSelector = "[data-test]";
  const elementsByDataTest = queryElementByAttribute<HTMLButtonElement>(dataTestSelector);
}
