## Anatomy of tsconfig.json

# let’s understand the basic structure of the tsconfig.json file:

```json
{
  "compilerOptions": {
    // TypeScript compiler options go here
  },
  "include": [
    // Array of file globs to include in the compilation
  ],
  "exclude": [
    // Array of file globs to exclude from the compilation
  ]
  // Additional configuration options can be added here
}
```

```txt
--strictNullChecks: Ensures that variables are not assigned null or undefined unless explicitly allowed by their type.

--strictFunctionTypes: Ensures that function parameter types and return types are checked more strictly.

--strictPropertyInitialization: Requires all class properties to be initialized in the constructor.

--strictBindCallApply: Enables stricter checking on bind, call, and apply methods of functions.

```

```json
{
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true,
    "strictBindCallApply": true
  }
}
```

## Advanced Compiler Options

```txt
Beyond strict type checking, TypeScript offers various advanced compiler options for fine-tuning the behaviour of the compiler. Some noteworthy options include:

--target: Specifies the ECMAScript target version for the generated JavaScript code (e.g., "es5", "es6").
--module: Specifies the module system to use in the generated JavaScript code (e.g., "commonjs", "amd", "es6").
--esModuleInterop: Enables compatibility with CommonJS modules and allows default imports from modules with no default export.
--declaration: Generates corresponding .d.ts declaration files.
--sourceMap: Generates source map files for better debugging support.
--noEmitOnError: Prevents TypeScript from emitting JavaScript files if there are compile errors.
```

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "esModuleInterop": true,
    "declaration": true,
    "sourceMap": true,
    "noEmitOnError": true
  }
}
```
