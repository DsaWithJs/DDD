## 1. Using React.FC

```tsx
type FCProps = { text: string; children?: any };
const FCComponent: React.FC<FCProps> = ({ text = "" }) => <div>{text}</div>;

function App() {
  return (
    <div className="App">
      <FCComponent text="Hello Chris1993.">
        <span>children</span>
      </FCComponent>
    </div>
  );
}
```

## 2. Use JSX.Element

```tsx
type FCProps = { text: string; children?: any };
const ElementComponent = ({ text }: FCProps): JSX.Element => <div>{text}</div>;
function App() {
  return (
    <div className="App">
      <ElementComponent text="Hello Chris1993."></ElementComponent>
    </div>
  );
}
```

## Use React.PropsWithChildren

```tsx
type IProps = React.PropsWithChildren<{ text: string }>;
const PropsComponent = ({ text }: IProps) => <div>{text}</div>;

function App() {
  return (
    <div className="App">
      <PropsComponent text="Hello Chris1993.">
        <span>children</span>
      </PropsComponent>
    </div>
  );
}
```

```tsx
type ButtonProps = {
  variant: "link" | "action";
} & ({ onClick: () => void; href?: never } | { href: string; onClick?: never });

const Button: React.FC<ButtonProps> = ({ variant, onClick, href }) => {
  if (variant === "link" && href) {
    return <a href={href}>Link</a>;
  }
  if (variant === "action" && onClick) {
    return <button onClick={onClick}>Action</button>;
  }
  return null;
};
```
