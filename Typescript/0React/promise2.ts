namespace ss {
  // Ejemplo de uso de async/await en TypeScript
  function fetchData(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched!");
      }, 2000);
    });
  }

  async function main() {
    console.log("Fetching data...");
    const data = await fetchData();
    console.log(data);
  }

  main();
}

namespace ss {
  type PostResponse = { data: Post | null };
  function transformResponse(apiResponse: PostResponse) {
    // implementation here
  }
  function transformResponse1(apiResponse: NonNullable<PostResponse>) {
    // implementation here
  }
}
