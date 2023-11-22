function convertToArray<T>(input: T): T[] {
  return [input];
}

convertToArray(5);
convertToArray("testing");

//.....................
function getIndexOfArrayItem<T>(array: T[], arrayItem: T) {
  return array.findIndex((item) => item === arrayItem);
}

const array = [55, 99, 77];
getIndexOfArrayItem(array, 77);

//3.........................
function createArrayPair<T, K>(input1: T, input2: K): [T, K] {
  return [input1, input2];
}

createArrayPair("Hello", 10);
