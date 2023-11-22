```txt
If initial inferred type is something and later on we want to assign different type to the state variable, we have to explicitly define the type of useState hook.

```

```tsx
type UserType = {
  id: number;
  name: string;
};

const [student, setStudent] = useState<null | UserType>(null);

// Type Assertion
const [student, setStudent] = useState<UserType>({} as UserType);

We can also use Type Assertion using ‘as’ , which forces the typescript compiler to accept given value as same as the indicated type.
```
