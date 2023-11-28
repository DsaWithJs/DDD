import React, { ReactNode } from "react";

interface IProps<T> {
  renderOption: (option: T) => ReactNode;
  options: Array<T>;
}

function ListComponent<T>({ options, renderOption }: IProps<T>) {
  return <div>{options.map((option: T) => renderOption(option))}</div>;
}

interface Car {
  name: string;
  model: string;
}

interface Human {
  name: string;
  age: number;
}

export function SomeComponent() {
  const carList: Array<Car> = [
    { name: "Z4", model: "BMW" },
    { name: "C200", model: "Benz" },
    { name: "S500", model: "Benz" },
  ];

  const humanList: Array<Human> = [
    { name: "John", age: 18 },
    { name: "Alex", age: 23 },
    { name: "Tom", age: 84 },
  ];

  return (
    <div>
      <ListComponent<Car> options={carList} renderOption={(option) => <p>{option.model}</p>} />
      <ListComponent<Human> options={humanList} renderOption={(option) => <p>{option.age}</p>} />
    </div>
  );
}

