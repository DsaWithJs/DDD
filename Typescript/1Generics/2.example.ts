/**
 *Passing element in generics
 */
namespace ss {
  function hello<T>(arg: T): T {
    return arg;
  }

  //setting function is number and passing value also number
  console.log(hello<number>(33));
  //setting function is string and passing value also string
  console.log(hello<string>("Thirty three"));
  //setting function is boolean and passing value also boolean
  console.log(hello<boolean>(true));
  //setting function is not neccessory
  console.log(hello("Hello world"));
}
/**
 * Passing array of element in generics
 */
namespace ss {
  function hello1<T>(arg: Array<T>): Array<T> {
    let alpha: Array<T> = [];
    for (let i = 0; i < arg.length; i++) {
      alpha.push(arg[i]);
    }
    // Here we should return alpha that where all array elements stored locally
    return alpha;
    // return arg
  }
  // Passing set of integer
  console.log(hello1<number>([33, 44, 55]));
  // Passing set of string
  console.log(hello1<string>(["Three", "Four", "Five"]));
  // Passing set of boolean
  console.log(hello1<boolean>([true, false, false, true]));
  // Not setting up type annotation
  console.log(hello1(["Hello", "World"]));
  // Passing mixed type using any
  console.log(hello1<any>(["Hello", "World", 33, true]));
}
/**
 * Multiple generics elements
 */
namespace ss {
  function hello2<A, Z>(arg1: A, arg2: Z): [A, Z] {
    return [arg1, arg2];
  }

  console.log(hello2<number, number>(33, 44));
  console.log(hello2<string, string>("a33", "b44"));
  console.log(hello2<number, string>(33, "b44"));
  console.log(hello2("five", 5));
}
/**
 * Class generics
 */
namespace ss {
  class Fish<T> {
    fishname: T;
    constructor(arg: T) {
      this.fishname = arg;
    }
    prtname(): T {
      return this.fishname;
    }
  }
  // Here passing fish name as string
  let b1 = new Fish("jelly fish");
  console.log(b1);
  let res1 = b1.prtname();
  console.log(res1);
  // Here passing fish name as integer or number
  let b2 = new Fish(125);
  console.log(b2);
  let res2 = b2.prtname();
  console.log(res2);
}

/**
 *<T extends>
 */
namespace ss {
  class Fish1 {
    fish_name: string;
    isHarmful: boolean;
    constructor(arg: string, bol: boolean) {
      this.fish_name = arg;
      this.isHarmful = bol;
    }
  }
  // Here T from function is extend on class Fish1
  function calFish<T extends Fish1>(ele: T): string {
    if (ele.isHarmful == true) {
      return `${ele.fish_name} is harmful`;
    } else {
      return `${ele.fish_name} is not harmful`;
    }
  }

  let bf1 = new Fish1("Shark", true);
  let res_bf1 = calFish(bf1);
  console.log(res_bf1);

  let bf2 = new Fish1("Dolphin", false);
  let res_bf2 = calFish(bf2);
  console.log(res_bf2);
}
/**
 * Generics Interface
 */
namespace ss {
  interface Argument<T> {
    (arg: T): void;
  }
  function getName<T>(arg: T): string {
    return `the value of input is ${arg}`;
  }

  let merger: Argument<string> = getName;
  let op = merger("User");
  console.log(op);

  let merger1: Argument<number> = getName;
  let op1 = merger1(33);
  console.log(op1);
}
/**
 * Generics Type
 */
namespace ss {
  // Input type as any
  type Argument1<T> = {
    name: T;
    age: T;
  };
  // Here i'm declared any type,
  // If you are passing same type you can set str or int

  let namek: Argument1<any> = {
    name: "one",
    age: 15,
  };

  console.log(namek);
  console.log(namek.name);
  console.log(namek.age);
}
