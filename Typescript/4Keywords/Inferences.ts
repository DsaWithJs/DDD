/**
 * typeof
 * The typeof keyword is a really simple tool that allows us to explicit get the type(s) of a code block,
 * being it a string, number, object, function or anything else.
 * It’s used when you want to get type of something to, for instance,
 * create another code snippet that receives that type as an input.
 */

namespace ss {
  const myName = "Caique";
  type VariableType = typeof myName; // this type will be 'string'

  const two: VariableType = "ss";
}

/**
 * keyof
 * Another simple keyword used a lot is keyof.
 * This tool gets the keys of an object and converts it into a type.
 * The most ordinary use of it is when we’re in a loop (forEach, map, reduce, filter, etc)
 * and want to let TS know the current item key is the same type`of the general object key.
 */

namespace ss {
  const bestOfTypescript = {
    database: "Prisma",
    frontend: "ReactJS",
    backend: "NodeJS",
  };

  // It will loop through all the object keys (database, frontend, backend)
  Object.keys(bestOfTypescript).forEach((key) => {
    /* 
        Error shown: Element implicity has an 'any' type because expression of type 'string'
        can't be used to index type '{ database: string; frontend: string; backend: string }'.
        */
    console.log(bestOfTypescript[key]);
  });
}

namespace ss {
  // To fix it, keyof could be used:
  const bestOfTypescript = {
    database: "Prisma",
    frontend: "ReactJS",
    backend: "NodeJS",
  };

  type BestOfTypescript = typeof bestOfTypescript; // type extracted just to be clearer

  Object.keys(bestOfTypescript).forEach((key) => {
    console.log(bestOfTypescript[key as keyof BestOfTypescript]);
  });
}

/**
 * Get the return type of a function: ReturnType
 */
namespace ss {
  export function formatDateToObject(date: Date) {
    const dateObject = {
      fullDate: new Intl.DateTimeFormat("pt-BR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(date),

      year: new Intl.DateTimeFormat("pt-BR", {
        year: "numeric",
      }).format(date),

      dateAndMonth: new Intl.DateTimeFormat("pt-BR", {
        month: "2-digit",
        day: "2-digit",
      }).format(date),

      hour: new Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }).format(date),
    };

    return dateObject;
  }

  type FormatDateToObjectType = ReturnType<typeof formatDateToObject>;

  /*
      It will result in:
        type FormatDateToObjectType = {
            fullDate: string;
            year: string;
            dateAndMonth: string;
            hour: string;
        }
      */
}

/**
 * Get the return type of an async function : Awaited
 * it’s natural you would like to get the return of an async function (in other words, that returns a Promise.).
 * To do that, you just need to add one more utility type: Awaited.
 */
namespace ss {
  async function sayMyInformations(name: string, age: number) {
    return `My name is ${name} and I have ${age} years old`;
  }

  type ReturnValue = Awaited<ReturnType<typeof sayMyInformations>>;

  /*
      It will result in:
        type ReturnValue = string
      */
}

/**
 * Get the function parameters : Parameters
 */
namespace ss {
  function sayMyInformations(name: string, age: number) {
    return `My name is ${name} and I have ${age} years old`;
  }

  type FunctionParameters = Parameters<typeof sayMyInformations>;

  /*
      It will result in:
        type FunctionParameters = [name: string, age: number]
      */
}

/**
 * Using object keys to generate Union Types
 * Sometimes it’s desired to make a type that contains all the keys of an object
 * to use it as part of a more complex type, or to infer it in a function parameter.
 * Whatever your need, it’s possible to get this result using a simple combination of keyof and typeof.
 */
namespace ss {
  const bestOfTypescript = {
    database: {
      prisma: true,
      mongoose: true,
      firebase: false,
    },
    frontend: {
      reactjs: true,
      nextjs: true,
      vue: false,
    },
    backend: {
      nodejs: true,
      nestjs: true,
    },
  };

  type BestOfTypescriptTypes = typeof bestOfTypescript;
  type BestOfTypescriptKeysTypes = keyof BestOfTypescriptTypes;

  /*
      It will result in:
        type BestOfTypescriptKeysTypes = "database" | "frontend" | "backend"
      */
}
