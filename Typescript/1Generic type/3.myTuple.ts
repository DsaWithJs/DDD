namespace ss {
  type MyTuple = [string, ...number[]];

  const a: MyTuple = ["a", 1, 2];

  const b: MyTuple = ["b", 1, 2, 3, 4];

  const c: MyTuple = ["c", "c", 1, 2];

  const d: MyTuple = ["c", 1, 2, "c"];
}
namespace ss {
  type MyTuple<T> = [T, ...T[]];
}
/**
 * how do you limit the length to n elements?
 * By adding the length property to your object
 */
namespace ss {
  type MyTuple<T, TLength extends number> = [T, ...T[]] & { length: TLength };

  type MyArray3T<T> = MyTuple<T, 3>;

  const a: MyArray3T<number> = [1, 2, 3];

  const c: MyArray3T = [1, 2, 3, 4];

  const c: MyArray3T = [1, 2];
}
