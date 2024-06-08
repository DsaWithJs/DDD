In react, how parent component calls child component function

In React, a parent component can call a function defined in a child component by using the concept of `refs` (references). Here's a step-by-step guide to achieve this:

1. **Define the function in the child component.**

2. **Create a ref in the parent component.**

3. **Pass the ref to the child component.**

4. **Call the child's function using the ref in the parent component.**

Here's an example to illustrate these steps:

### Child Component

```jsx
import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ChildComponent = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    childFunction,
  }));

  const childFunction = () => {
    console.log("Child function called!");
  };

  return (
    <div>
      <p>This is the child component.</p>
    </div>
  );
});

export default ChildComponent;
```

### Parent Component

```jsx
import React, { useRef } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const childRef = useRef();

  const handleClick = () => {
    childRef.current.childFunction();
  };

  return (
    <div>
      <h1>This is the parent component</h1>
      <button onClick={handleClick}>Call Child Function</button>
      <ChildComponent ref={childRef} />
    </div>
  );
};

export default ParentComponent;
```

### Explanation

1. **Child Component**:

   - The `ChildComponent` uses `forwardRef` to forward refs to the child component.
   - `useImperativeHandle` is used to expose the `childFunction` to the parent component.

2. **Parent Component**:
   - The `useRef` hook creates a ref (`childRef`) that will be passed to the child component.
   - The `handleClick` function calls the `childFunction` from the child component using the ref.

When you run this code, clicking the button in the parent component will call the function in the child component and log "Child function called!" to the console.

without using useImerativehandle

You can still achieve the same goal without using `useImperativeHandle` by using class components or by passing a callback function as a prop. Here's how you can do it with both approaches:

<ParentComponent >
 <ChildComponent />
</ParentComponent >

To call a function in a child component that is passed as `children` to the parent component, you can pass a reference or a callback function to the child component through the parent component's `children` prop. Here's an example of how you can achieve this using both functional and class components.

### Using Functional Components with Callback Functions

### Child Component

In this example, we define the function in the child component and pass it back to the parent component using a prop.

```jsx
import React, { useEffect } from "react";

const ChildComponent = ({ setChildFunction }) => {
  const childFunction = () => {
    console.log("Child function called!");
  };

  useEffect(() => {
    setChildFunction(childFunction);
  }, [setChildFunction]);

  return (
    <div>
      <p>This is the child component.</p>
    </div>
  );
};

export default ChildComponent;
```

### Parent Component

The parent component passes a setter function (`setChildFunction`) to the child component through its `children`.

```jsx
import React, { useState, cloneElement, Children } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = ({ children }) => {
  const [childFunction, setChildFunction] = useState(null);

  const handleClick = () => {
    if (childFunction) {
      childFunction();
    }
  };

  const childrenWithProps = Children.map(children, (child) => cloneElement(child, { setChildFunction }));

  return (
    <div>
      <h1>This is the parent component</h1>
      <button onClick={handleClick}>Call Child Function</button>
      {childrenWithProps}
    </div>
  );
};

export default ParentComponent;
```

### Explanation

1. **Child Component**:

   - Defines `childFunction`.
   - Uses `useEffect` to set the `childFunction` in the parent component by calling `setChildFunction`.

2. **Parent Component**:
   - Manages the `childFunction` state.
   - Uses `cloneElement` to pass the `setChildFunction` prop to each child component.
   - Calls `childFunction` when the button is clicked.

By passing the `setChildFunction` callback to the child component through the `children` prop, the parent component can call the child's function when needed.
