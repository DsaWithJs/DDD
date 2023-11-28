## How can I extract a return type of a function?

```txt
This one is quite useful when you want to get a type of what a function is returning but you don’t have access to the type itself, e.g. when a third-party library exposes a typed function but it doesn’t export the returned type. For example:
```

```ts
// third-party library
type Slug = // complex slug type that isn't exported

export function slugifyString(str: string): Slug

// your app
type Slug = ReturnType<typeof slugifyString>

type Post = {
  id: string
  title: string
  slug: Slug
}
```

## How can get a type wrapped in a Promise?

Let’s say our previous example returns a Promise instead of an object type:

```ts
// third-party library
type Slug = // complex slug type that isn't exported

export function slugifyString(str: string): Promise<Slug>

// your app
type Slug = ReturnType<typeof slugifyString> // it's a Promise now

type Post = {
  id: string
  title: string
  slug: Slug // won't work anymore
}
```

Our type extraction would now return a Promise type as that's what the function is returning. We need to get to the type wrapped in a promise and we can do it like so:

```ts
type Slug = Awaited<ReturnType<typeof slugifyString>>;
```

This might look like a bit too much generics nesting and if it is too much for you, you can split it like so:

```ts
type SlugifyStringPromise = ReturnType<typeof slugifyString>;
type Slug = Awaited<SlugifyStringPromise>;
```
