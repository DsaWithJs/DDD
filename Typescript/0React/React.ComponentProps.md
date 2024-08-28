In React, `React.ComponentProps` is a utility type provided by TypeScript that allows you to extract the props of a given React component type. This can be particularly useful when you want to reuse or reference the props type of an existing component.

### Usage of `React.ComponentProps`

The basic syntax is:

```typescript
type PropsOfComponent = React.ComponentProps<typeof Component>;
```

Here, `Component` is the React component whose props you want to extract.

### Example

Let's go through an example to understand how `React.ComponentProps` works:

1. **Defining a Component with Props**

```typescript
import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => <button onClick={onClick}>{label}</button>;
```

2. **Extracting Props Using `React.ComponentProps`**

You can use `React.ComponentProps` to extract the `ButtonProps` type like this:

```typescript
type ButtonPropsExtracted = React.ComponentProps<typeof Button>;
```

`ButtonPropsExtracted` will now be equivalent to the `ButtonProps` interface.

3. **Using the Extracted Props**

You can now use the `ButtonPropsExtracted` type elsewhere in your code, such as in another component or a utility function:

```typescript
const MyComponent: React.FC<ButtonPropsExtracted> = (props) => (
  <div>
    <Button {...props} />
  </div>
);
```

### Why Use `React.ComponentProps`?

1. **Type Reusability**: It allows you to reuse prop types without manually redefining them, ensuring consistency and reducing the chances of errors.
2. **Type Safety**: If the original component's props are updated, the type extracted using `React.ComponentProps` will automatically reflect those changes, keeping your code safe and up to date.

3. **Third-Party Components**: When working with third-party components, you can extract their props to ensure that you're using them correctly without needing to reference documentation every time.

### Advanced Usage: Getting Props of HTML Elements

You can also use `React.ComponentProps` to get the props of standard HTML elements:

```typescript
type DivProps = React.ComponentProps<"div">;
```

In this example, `DivProps` will include all the possible props that a `div` element can have in React, such as `className`, `id`, `style`, etc.

### Conclusion

`React.ComponentProps` is a powerful and flexible TypeScript utility that enhances type safety and code maintainability in React projects. It allows you to easily extract and reuse the props of components, making your code more modular and easier to manage.
