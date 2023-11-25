// function double(x: number): number;
// function double(x: string): string;
// function double(x: any) {
//   return x + x;
// }

function double<T extends number | string>(x: T): T extends string ? string : number;
function double(x: any) {
  return x + x;
}
// const num: number
const num = double(10);
// const str: string
const str = double("ts");

function doubleFn(x: number | string) {
  // Argument of type 'string | number' is not assignable to
  // parameter of type 'number'.
  // Argument of type 'string | number' is not assignable to
  // parameter of type 'string'.
  return double(x); // Error
}
