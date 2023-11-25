/**
 * In TypeScript,
 * you can use the Record type to define an object type with specific property names
 * and corresponding value types.
 *
 * The Record type takes two type parameters: the property name type and the value type.
 */
namespace ss {
  // Define a type using the Record type
  type MyRecord = Record<string, number>; // Create an object of type MyRecord
  const myObject: MyRecord = {
    key1: 10,
    key2: 20,
    key3: 30,
  };

  // Access the properties
  console.log(myObject.key1); // Output: 10
  console.log(myObject.key2); // Output: 20

  // Error: Property 'key4' is missing in type 'MyRecord'
  console.log(myObject.key4);

  // Another example with a different value type
  type PersonRecord = Record<string, { name: string; age: number }>;

  const people: PersonRecord = {
    john: { name: "John Doe", age: 25 },
    jane: { name: "Jane Smith", age: 30 },
    mike: { name: "Mike Smith", age: "40" },
    // Error: Type 'string' is not assignable to type 'number'.
  };

  console.log(people.john.name); // Output: John Doe
  console.log(people.jane.age); // Output: 30
}

/**
 * Before
                  <button
                    type="button"
                    onClick={handleCheckAll}
                    css={circuitListTextUnderlineStyle}
                  >
                    {checkAllButtonType === 'check'
                      ? 'Check all'
                      : checkAllButtonType === 'uncheck'
                      ? 'Clear all'
                      : null}
                  </button>
 */
/**
 after

const buttonTypeTexts: Record<CheckAllButtonOption, string> = {
  check: 'Check all',
  uncheck: 'Clear all',
};

...
                  <button
                    type="button"
                    onClick={handleCheckAll}
                    css={circuitListTextUnderlineStyle}
                  >
                     {buttonTypeTexts[checkAllButtonType]}
                  </button>
 */
