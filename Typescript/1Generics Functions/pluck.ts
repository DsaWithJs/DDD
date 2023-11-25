interface Album {
  artist: string;
  title: string;
  releaseDate: Date; // MM/dd/yyyy
  recordingType: "studio" | "live"; // "live" or "studio"
}

const dangerous: Album = {
  artist: "Eric Clapton",
  title: "Guitarist and singer-songwriter",
  releaseDate: new Date("11/21/1991"),
  recordingType: "studio",
};

// Step 1
function pluck(record: any[], key: string): any[] {
  return record.map((r) => r[key]);
}

/*
The above pluck function is not ideal because it uses the any type, 
especially as the return type.
*/

// Step 2
//First, we can improve the type signature by introducing a generic parameter:
function pluck2<T>(record: T[], key: string): any[] {
  // Element implicitly has an 'any' type because expression of type 'string' can't be used to
  // index type 'unknown'.
  // No index signature with a parameter of type 'string' was found on type 'unknown'.(7053)
  return record.map((r) => r[key]); // Error
}

// Step 3
function pluck3<T>(record: T[], key: keyof T) {
  return record.map((r) => r[key]);
}

// Step 4
//your IDE will automatically infer the return type of the function:
function pluck4<T>(record: T[], key: keyof T): T[keyof T][] {
  return record.map((r) => r[key]);
}

const albums: Album[] = [
  {
    artist: "Eric Clapton",
    title: "Guitarist and singer-songwriter",
    releaseDate: new Date("11/21/1991"),
    recordingType: "studio",
  },
];

// let releaseDateArr: (string | Date)[]
let releaseDateArr = pluck4(albums, "releaseDate");

// In the example,
// the type of the releaseDateArr variable is inferred as (string | Date)[],

function pluck5<T, K extends keyof T>(record: T[], key: K): T[K][] {
  return record.map((r) => r[key]);
}

// let releaseDateArr: Date[]
let releaseDateArr2 = pluck5(albums, "releaseDate");
