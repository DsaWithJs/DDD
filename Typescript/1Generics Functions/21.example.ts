namespace ss {
  function filterByProperty<T>(items: T[], property: keyof T, value: T[keyof T]): T[] {
    return items.filter((item) => item[property] === value);
  }
  let people: Person[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
  let animals: Animal[] = [
    { type: "cat", age: 3 },
    { type: "dog", age: 5 },
    { type: "bird", age: 1 },
  ];
  let filteredPeople = filterByProperty(people, "name", "Bob"); // returns [{ name: "Bob", age: 30 }]
  let filteredAnimals = filterByProperty(animals, "type", "dog"); // returns [{ type: "dog", age: 5 }]
}
