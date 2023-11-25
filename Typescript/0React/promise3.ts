namespace ss {
  const promise1: Promise<string> = new Promise((resolve) => setTimeout(() => resolve("Hello"), 1000));

  const promise2: Promise<number> = new Promise((resolve) => setTimeout(() => resolve(123), 500));

  Promise.race([promise1, promise2]).then((result) => {
    console.log(result); // 123
  });
}

namespace ss {
  type CoffeeProps = {
    name: string;
    type: string;
  };

  async function requestACoffee(): Promise<CoffeeProps> {
    console.log("Request a coffee from the coffee-maker-api");
    return {
      name: "Black Coffee",
      type: "Arabica",
    };
  }
}
