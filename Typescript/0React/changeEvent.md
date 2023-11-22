```tsx
"use client";
import React from "react";

const logChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.currentTarget.value);
};

const InputChange = () => {
  return (
    <>
      <span>Type something: </span>
      <input type="text" id="txtName" onChange={logChange} />
    </>
  );
};

export default InputChange;
```
