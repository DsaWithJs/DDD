/**
 * The main differences between "interface" and "type"
 */

// 1. Extension and Declaration Merging.

interface User {
  name: string;
}
interface User {
  age: number;
}
// Merged User interface: { name: string; age: number; }

//2. Implements and Extends.
interface Shape {
  getArea(): number;
}
interface Circle extends Shape {
  radius: number;
}
class MyCircle implements Circle {
  radius: number;
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}
/**
 * Type aliases cannot be used with “implements” and “extends”.
 */

// 3. Intersection and Union Types.
type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };
type Point2DOr3D = Point2D | Point3D;
type Result = Point2D & { isValid: boolean };

/**
 * Interfaces are often preferred for defining the shape of objects because of their explicit contractual nature.
 * They are self-documenting and can improve code readability.
 */

/***
 * Type aliases are commonly used when defining complex types or working with unions and intersections.
 * They can provide more concise and descriptive names for complex types.
 */
