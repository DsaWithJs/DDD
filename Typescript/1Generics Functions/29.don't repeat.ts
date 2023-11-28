/**
 * https://medium.com/@nico.axtmann95/an-easy-and-short-introduction-to-typescript-generics-c9c2c656ed00
 */
namespace ss {
  type Category = {
    name: string;
  };

  const categories: Array<Category> = [
    {
      name: "Travel",
    },
    {
      name: "Electronics",
    },
  ];

  const sort = (array: Array<Category>) => {
    return array.sort((a: Category, b: Category) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  };
  console.log(sort(categories));
  // [ { "name": "Electronics" }, { "name": "Travel" } ]
}
/**
 * If we want to sort the products as well,
 * we could just copy the sortAlphabectically code,
 * create a new function sortProducts,
 * change the type of the inputs from Array<Category> to Array<Product>
 * and we are done!
 */

/**
 * Here Generics are a very handy utility to use
 * and make the most out of reusing your code where it applies.
 */
namespace ss {
  type Category = {
    name: string;
  };
  const categories: Array<Category> = [
    {
      name: "Travel",
    },
    {
      name: "Electronics",
    },
  ];

  const sort = <T extends { name: string }>(array: Array<T>) => {
    return array.sort((a: T, b: T) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  };
  console.log(sort(categories));
}

namespace ss {
  type Category = {
    name: string;
    tags: string[];
  };

  type Product = {
    name: string;
    description: string;
  };
  let products: Array<Product> = [
    {
      name: "Foo",
      description: "This is the awesome foo product.",
    },
    {
      name: "Bar",
      description: "The bar product helps you to improve your TypeScript skills! ",
    },
  ];
  let categories: Array<Category> = [
    {
      name: "Travel",
      tags: ["#travel", "#digitalnomad", "#backpacks"],
    },
    {
      name: "Electronics",
      tags: ["#smartphone", "#iot"],
    },
  ];

  const sort = <T extends { name: string }>(array: Array<T>) => {
    return array.sort((a: T, b: T) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  };
  console.log(sort(categories));
  // [ { "name": "Electronics", "tags": [ "#smartphone", "#iot" ] }, { "name": "Travel", "tags": [ "#travel", "#digitalnomad", "#backpacks" ] } ]
  console.log(sort(products));
  // [ { "name": "Bar", "description": "The bar product helps you to improve your TypeScript skills! " }, { "name": "Foo", "description": "This is the awesome foo product." } ]
}
