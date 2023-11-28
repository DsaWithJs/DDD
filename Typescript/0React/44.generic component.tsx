//https://javascript.plainenglish.io/utilising-typescript-generics-in-react-components-35e7badb2a14
import React, { useState } from "react";
import GenericDropDown from "./path-to-GenericDropDown"; // Adjust the import path accordingly

// GenericDropDown component - implementing <select> with typescript generics.
// The options props expects an array of object containing value: string, and label: string properties.

type GenericDropDownOption = string | number;

/* Defining the shape of the options that will be passed into the GenericDropDown component. */
interface GenericDropDownOptionProps<T extends GenericDropDownOption> {
  value: T;
  label: string;
}

/* Defining the props that the GenericDropDown component will take. */
interface GenericDropDownProps<T extends GenericDropDownOption> {
  options: GenericDropDownOptionProps<T>[];
  value: T;
  onChange: (value: T) => void;
  placeholder?: string;
} 

/**
 * GenericDropDown is a function that takes a GenericDropDownProps object and returns a select element
 * @param props - GenericDropDownProps<T>
 * @returns A React component that takes a GenericDropDownProps<T> as props and returns a select
 * element.
 */
const GenericDropDown = <T extends GenericDropDownOption>(props: GenericDropDownProps<T>) => {
  const { options, value, onChange, placeholder = "Select..." } = props;

  const handleOnChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const { selectedIndex } = e.currentTarget;
    const selectedOption = props.options[selectedIndex];
    return onChange(selectedOption.value);
  };
  return (
    <select value={value} onChange={handleOnChange}>
      <option value="" key="_placeholder_option_" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const MyComponent = () => {
  // Define the options for the dropdown with number values
  const options = [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
    // Add more options as needed
  ];

  // State to track the selected value
  const [selectedValue, setSelectedValue] = useState<number>(options[0].value);

  // Handle change event from the dropdown
  const handleDropdownChange = (value: number) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <GenericDropDown<number> options={options} value={selectedValue} onChange={handleDropdownChange} placeholder="Select an Option" />
    </div>
  );
};

export default MyComponent;
