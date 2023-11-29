type Book = {
  title: string;
  genre: string;
  publicationYear: number;
};

type Car = {
  modelName: string;
  type: string;
  price: number;
};

const listOfBooks: Book[] = [
  { title: "Dragon Of The Titans", genre: "fantasy", publicationYear: 1992 },
  { title: "Queen Of Spring", genre: "drama", publicationYear: 2005 },
  { title: "Wolves Of The King", genre: "fantasy", publicationYear: 1988 },
];

const listOfCars: Car[] = [
  { modelName: "Yellow Car", type: "coupe", price: 20000 },
  { modelName: "Blue Car", type: "SUV", price: 45000 },
  { modelName: "Green Car", type: "coupe", price: 18000 },
];

const filterArrayByValue = <T, P extends keyof T>(
  items: T[],
  propertyName: P,
  valueToFilter: T[P] //Partial<T>
): T[] => {
  return items.filter((item) => item[propertyName] === valueToFilter);
};

console.log(filterArrayByValue(listOfBooks, "genre", "fantasy"));
console.log(filterArrayByValue(listOfCars, "type", "SUV"));
