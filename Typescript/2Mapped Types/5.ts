namespace ss {
  // Make all properties of T optional: ? operator
  // `keyof T` defines a set, we can iterate keys by [Property in keyof T]
  type Partial<T> = {
    [Property in keyof T]?: T[Property];
  };
  type SomePartial = Partial<{ name: string }>; // { name?: string | undefined }

  // Make all properties of T required: -? operator
  type Required<T> = {
    [Property in keyof T]-?: T[Property];
  };
  type SomeRequired = Required<{ name?: string }>; // { name: string }

  // Make all properties of T readonly: readonly operator
  type Readonly<T> = {
    readonly [Property in keyof T]: T[Property];
  };
  type SomeReadonly = Readonly<{ name: string }>; // { readonly name: string }

  // Composed
  type SomeComposed = Partial<Readonly<{ name: string }>>; // { readonly name?: string | undefined }
}

/**
 * Bonus operator -readonly, maps types to writable ones.
 */
namespace ss {
  // Make all properties of T writable: -readonly operator
  type Writable<T> = {
    -readonly [Property in keyof T]: T[Property];
  };
  type SomeWritable = Writable<{ readonly name: string }>; // { name: string }
}

/**
 * Typescript 4.1 enables to use Key Remapping to mutate existing type keys to create new one.
 */
namespace ss {
  // As classic map method, we can use `as operator` to map keys.
  // [Property in (key of T -> as (map) -> NewProperties)]: Iterate mapped keys
  type ReMapped<T> = {
    [Property in keyof T as NewProperties]: T[Property];
  };

  // Use template literal types to create new keys.
  type Getter<T> = {
    [Property in keyof T as `get${Capitalize<string & Property>}`]: () => T[Property];
  };
  type SomeGetter = Getter<{ id: string }>; // { getId: () => string }

  // Filter out keys with Exclude
  type ExcludeName<T> = {
    [Property in keyof T as Exclude<Property, "name" | "id">]: T[Property];
  };
  type SomeNameExcluded = ExcludeName<{ name: string; age: number; id: string }>; // { age: number }

  // Pick keys with Extract
  type ExtractName<T> = {
    [Property in keyof T as Extract<Property, "name" | "age">]: T[Property];
  };
  type SomeNameExtracted = ExtractName<{ id: string; name: string; age: number }>; // { name: string, age: number }
}
