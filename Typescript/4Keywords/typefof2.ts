/**
 * Extracting type and nested-type information out of variables
 */
namespace ss {
  let inst = {
    a: 1,
    b: 2,
    subInst: {
      c: 3,
      d: 4,
    },
  };

  console.log(inst.a); // fine!
  console.log(inst.e); // error!
  console.log(inst.subInst.c); // fine!
  console.log(inst.subInst.f); // error!
}
namespace ss {
  let inst = {
    a: 1,
    b: 2,
    subInst: {
      c: 3,
      d: 4,
    },
  };

  let anotherSubInst: (typeof inst)["subInst"] = {
    c: 5, // fine
    d: 6, // fine
    e: 7, // error! type does not have such prop
  };

  console.log(anotherSubInst.c); // type check fine
}
/**
 * What if you wanted to get an element type out of an array? There are,
 * in fact, several ways.
 */
namespace ss {
  let arr: number[];

  // easy way
  let elemtInst: (typeof arr)[0];
  elemtInst = 5; // type check ok

  // more technical way using 'infer' keyword and conditional types
  // (more on this later)
  type ElementType1<TArr extends any[]> = TArr extends (infer T)[] ? T : any;

  let elemInst1: ElementType1<typeof arr>;
  elemInst1 = 7; // type check ok

  // equivalent but more verbose example using 'infer'
  type ElementType2<TArr extends Array<any>> = TArr extends Array<infer T> ? T : any;

  let elemInst2: ElementType2<typeof arr>;
  elemtInst = 11; // type check ok
}
/**
 * What is the difference between this two ways? For one, TS has tuples based on JS arrays,
 * and for them elements at different index will have different types.
 */
namespace ss {
  let tuple: [number, string];

  let elemtInst: (typeof tuple)[0]; //number
  elemtInst = 5; // type check ok
  elemtInst = ""; // error!

  type ElementType<TArr extends any[]> = TArr extends (infer T)[] ? T : any;

  let elemInst1: ElementType<typeof tuple>; //number|string
  elemInst1 = 7; // type check ok
  elemInst1 = ""; // type check ok
  elemInst1 = true; // error!
}

/**
 * Using type like an interface
 */
namespace ss {
  type Partial<T> = {
    [P in keyof T]?: T[P];
  };

  type Required<T> = {
    [P in keyof T]-?: T[P];
  };

  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };
}
/**
 * Extracting type information from function types
 */
namespace ss {
  function foo(bar: string, baz: { a: number; b: string }) {
    //...
  }

  type Baz = Parameters<typeof foo>[1];

  let baz: Baz = {
    a: 1,
    b: "", //type checks ok!
  };
}
namespace ss {
  /**
   * Obtain the parameters of a function type in a tuple
   */
  type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;

  /**
   * Obtain the parameters of a constructor function type in a tuple
   */
  type ConstructorParameters<T extends new (...args: any[]) => any> = T extends new (...args: infer P) => any ? P : never;

  /**
   * Obtain the return type of a function type
   */
  type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;

  /**
   * Obtain the return type of a constructor function type
   */
  type InstanceType<T extends new (...args: any[]) => any> = T extends new (...args: any[]) => infer R ? R : any;
}
/**
 * Combining all the techniques
 */
namespace ss {
  function foo() {
    return {
      a: 1,
      b: 2,
      subInstArr: [
        {
          c: 3,
          d: 4,
        },
      ],
    };
  }

  type InstType = ReturnType<typeof foo>;
  type SubInstArr = InstType["subInstArr"];
  type SubIsntType = SubInstArr[0];

  let baz: SubIsntType = {
    c: 5,
    d: 6, // type checks ok!
  };

  //You could just write a one-liner,
  //But please make sure it is forward-readable
  //(you can understand it from reading once left-to-right with no jumps)
  type SubIsntType2 = ReturnType<typeof foo>["subInstArr"][0];
  let baz2: SubIsntType2 = {
    c: 5,
    d: 6, // type checks ok!
  };
}
