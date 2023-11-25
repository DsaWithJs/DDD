namespace ff {
  function create<T>(num: T): T[] {
    const arrays: T[] = [];
    arrays.push(num);
    return arrays;
  }

  const arr = create<number>(1);
}
namespace ss {
  interface Dictionary<T> {
    [key: string]: T;
  }
  const myDict: Dictionary<number> = {
    avid: 1,
    cool: 3,
  };
}
// namespace ss{
//     function greet< T extends HasName>(obj: T) {
//         return `hello ${obj.name}`
//       }

//       const  dog = {name: 'ginger'}
//       console.log(greet(dog)
// }

/**
 * Defining generic types for APIs:
 */
namespace ss {
  interface ApiResponse<T> {
    data: T;
    success: boolean;
    message?: string;
  }
}

/**
 * Creating type-safe validation functions
 *  a generic validate function that checks if a value is not null or undefined can be defined as follows:
 */
namespace ss {
  function validate<T>(value: T): value is NonNullable<T> {
    return value != null;
  }
}

/**
 * Type 'number' is not assignable to type 'T'.
 */
namespace ss {
  function findMin<T extends number>(arr: T[]): T {
    return Math.min(...arr);
  }

  const numbers = [5, 3, 8, 1, 4];
  const minimum = findMin(numbers); // Result: 1 (inferred type: number)
}
/**
 * use a type assertion to tell result of Math.min() will be of type T.
 */
namespace ss {
  function findMin<T extends number>(arr: T[]): T {
    return Math.min(...arr) as T;
  }

  const numbers = [5, 3, 8, 1, 4];
  const minimum = findMin(numbers); // Result: 1 (inferred type: number)
}

namespace ss {
  type Config = Partial<{ multiplier: number; add: number }>;

  function processArray(arr: number[], config: Config = {}): number[] {
    const { multiplier = 1 } = config;
    return arr.map((item) => item * multiplier);
  }

  const numbers = [1, 2, 3, 4, 5];
  const config = { multiplier: 2 };
  const processedArray = processArray(numbers, config); // Result: [2, 4, 6, 8, 10]
}
