```tsx
import { ReactNode } from "react";

interface IProps {
  name: string;
  // define your props here
  // ...
  // ...

  // and include the children prop
  // which is of type React.ReactNode
  children: ReactNode;
}

const ChildrenComponent = (props: IProps) => {
  return (
    <div>
      {props.name}:<div>{props.children}</div>
    </div>
  );
};

export default ChildrenComponent;
```

```tsx
<ChildrenComponent name="testComponent">
  <h2>This is a child</h2>
</ChildrenComponent>
```

## Defining Function Components & props type:

```tsx
import { ReactNode, FunctionComponent } from "react";

interface IProps {
  name: string;
  // define your props here
  // ...
  // ...

  // and include the children prop
  // which is of type React.ReactNode
  children: ReactNode;
}

const ChildrenComponent: FunctionComponent<IProps> = ({ name, children }) => {
  return (
    <div>
      {props.name}:<div>{props.children}</div>
    </div>
  );
};

export default ChildrenComponent;
```

### Fixing “object is possibly ‘null’” or “object is possibly ‘undefined’”

```tsx
type TAddress = {
  streetName: string;
  streetNumber: string;
  postCode: number;
  suburb: string;
  state: string;
};

type IState = {
  firstName: string;
  lastName: string;
  age: number;
  address?: TAddress;
};

const getPostCode = (myState: IState) => {
  let pc = myState.address.postCode; // ‘myState.address is possibly ‘undefined’’,
};
```

## Option 1: using optional chaining operator ‘?’

```tsx
const getPostCode = (myState: IState) => {
  let pc = myState.address?.postCode;
};
```

## Option 2: using non-null assertion operator ‘!’

```tsx
const getPostCode = (myState: IState) => {
  let pc = myState.address!.postCode;
};
```

## Option 3: using nullish coalescing operator ‘??’

```tsx
type TAddress = {
  streetName: string;
  streetNumber: string;
  postCode: number;
  suburb: string;
  state: string;
};

type IState = {
  firstName: string;
  lastName: string;
  age: number;
  address?: TAddress;
};

const getAddress = (myState: IState) => {
  let address: TAddress = myState.address ?? { streetName: "ABCD", streetNumber: "A23", postCode: 1234, suburb: "MySub", state: "MyState" };
};
```
