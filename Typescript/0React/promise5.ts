namespace ss {
  const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve("Hola, data succeded.");
      } catch (e) {
        reject("Something went wrong " + e);
      }
    }, 2000);
  });
  promise.then((data) => {
    data.split(" ");
  });
}
/**
 *  As typescript now knows the result will be string,
 * auto-completion of string function will also come in the editor.
 */
