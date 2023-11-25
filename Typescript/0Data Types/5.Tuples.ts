/**
 * A tuple is a typed array with a pre-defined length and types for each index.
 */
namespace ss {
  // define our tuple
  let ourTuple: [number, boolean, string];

  // initialize correctly
  ourTuple = [5, false, "Coding God was here"];
}
/**
 * Tuples are like arrays with a fixed number of elements of known types.
 */

/**
 * 1. Labeled Tuples
 */
namespace ss {
  type LabeledTuple = [first: string, second: string];
  //The labels first and second don’t change the types — they’re only here to help us with readability.
}

/**
 * 2. Unlabeled Tuples
 */
type UnlabeledTuple = [string, string];

/**
 * Mixed Tuples
 */
type MixedTuple = [first: string, string];
