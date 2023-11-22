```tsx
type MyButtonProps = {
  handleButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const MyButton = (props: MyButtonProps) => {
  return <button onClick={props.handleButtonClick}>Click here!</button>;
};

// Parent Component File below

const ParentComponent = () => {
  return (
    <>
      <MyButton handleButtonClick={(e) => console.log(e.target)} />
    </>
  );
};
```
