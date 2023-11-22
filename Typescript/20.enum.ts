enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Reverse mapping
const directionName: string = Direction.Up; // 'UP'
const directionValue: Direction = Direction["UP"]; // Direction.Up

/*
# Inline Enums
In TypeScript, you can use const assertions to create 
what is sometimes referred to as “inline enums.” 

These are enums that are erased during compilation, 
and their values are directly inlined.
*/
const Status = {
  Success: "SUCCESS" as const,
  Error: "ERROR" as const,
};

// Usage
const successStatus: typeof Status.Success = Status.Success; // 'SUCCESS'
console.log(successStatus);

/* 
# Numeric Enums
Enums in TypeScript can have numeric values. By default, 
enum members are assigned incrementing numeric values starting from 0, 
but you can explicitly assign values to enum members.
*/
enum Weekday {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

// Usage
const today: Weekday = Weekday.Wednesday; // 3
console.log(today);
