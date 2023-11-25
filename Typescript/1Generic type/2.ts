/**
 * First of Array
 */
namespace ss {
  type First<T extends any[]> = T[0];

  type arr1 = ["a", "b", "c"];
  type arr2 = [3, 2, 1];

  type head1 = First<arr1>; // expected to be 'a'
  type head2 = First<arr2>; // expected to be 3
}
/**
 * Array should not be empty: extends []
 */

namespace ss {
  type First<T extends any[]> = T extends [] ? never : T[0];

  type arr1 = ["a", "b", "c"];
  type head1 = First<arr1>; // expected to be 'a'

  type arr2 = [];
  type head2 = First<arr2>; // never
}
/**
 * Array should not be empty: T['length']
 */

namespace ss {
  type First<T extends any[]> = T["length"] extends 0 ? never : T[0];

  type arr1 = ["a", "b", "c"];
  type head1 = First<arr1>; // expected to be 'a'

  type arr2 = [];
  type head2 = First<arr2>; // never
}
/**
 * decompose the array,
 */

namespace ss {
  type First<T extends any[]> = T extends [infer A, ...infer rest] ? A : never;

  type arr1 = ["a", "b", "c"];
  type head1 = First<arr1>; // expected to be 'a'

  type arr2 = [];
  type head2 = First<arr2>; // never
}
