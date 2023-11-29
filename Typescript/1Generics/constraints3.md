```ts
const keys = <T extends {}>(obj: T) => Object.keys(obj);
```

Here the compiler will say: I don't want to know what it is T, as long as it is an object, I accept it . I also don't care what the key and value are. Zinc is an important object.

```ts
keys({}) === [];
keys({ id: 1 }) === ["id"];
keys(1); // error
```
