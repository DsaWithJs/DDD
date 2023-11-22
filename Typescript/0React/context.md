```tsx
import { createContext } from "react";

const user = {
  name: "",
  email: "",
};

const UserContext = createContext(user); // user type is inferred as contexttype

// Scenario - when initial context value is unknown and future value is expected
type UserContextType = {
  name: string;
  email: string;
};
const UserContext = createContext<UserContextType | null>(null);
```
