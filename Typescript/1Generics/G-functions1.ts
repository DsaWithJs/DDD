function swap<T>(a: T, b: T): void {
  let temp: T = a;
  a = b;
  b = temp;
}

let x = 5;
let y = 10;

swap<number>(x, y);

console.log(x, y); // Output: 10, 5

/*
   In the example above, the swap function takes two parameters of type T, and a temporary variable temp of type T. 
   The function then swaps the values of a and b.
   
   When calling a generic function, you need to specify the type argument <number> in this case. 
   This allows the TypeScript compiler to infer the type and perform type checking.
   
   Generics can also be used with interfaces and classes. Here is an example of a generic interface:
   */
