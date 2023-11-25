// User-Defined Type Guards

/*
Create custom type guards using functions that return type confirmations 
based on the is keyword.
*/

function isHotel(place: unknown): place is Hotel {
  return (place as Hotel).propertyType === "Hotel";
}

interface Hotel {
  propertyType: "Hotel";
  rooms: number;
  amenities: string[];
}

const accommodation: unknown = { propertyType: "Hotel", rooms: 120, amenities: ["pool", "gym"] };

if (isHotel(accommodation)) {
  console.log(`This hotel has ${accommodation.rooms} rooms.`);
}

// Generics in Type Guards
/*
Sometimes you might want a more flexible type guard, 
one that works across various types. Generics come in handy here.
*/
function isType<T>(val: unknown, check: (arg: unknown) => boolean): val is T {
  return check(val);
}

const isNumber = (val: unknown): val is number => typeof val === "number";

if (isType<number>(42, isNumber)) {
  console.log("It's a number!");
}

// Discriminated Unions
/*
Consider the example of a booking system that features various types of accommodations, 
such as hotels, hostels, or Airbnb listings.
*/

interface Hotel {
  kind: "hotel";
  rooms: number;
}

interface Hostel {
  kind: "hostel";
  beds: number;
}

interface Airbnb {
  kind: "airbnb";
  bedrooms: number;
}

type Accommodation = Hotel | Hostel | Airbnb;

function getCapacity(accommodation: Accommodation): number {
  switch (accommodation.kind) {
    case "hotel":
      return accommodation.rooms;
    case "hostel":
      return accommodation.beds;
    case "airbnb":
      return accommodation.bedrooms;
    default:
      const _exhaustiveCheck: never = accommodation;
      return _exhaustiveCheck;
  }
}

// Using in and instanceof Keywords

/*
The in keyword checks for the existence of a property within an object, 
while instanceof is used for identifying an object's class.
*/
// Checking with 'in'
if ("rooms" in accommodation) {
  // Do something with accommodation.rooms
}

// Checking with 'instanceof'
class BoutiqueHotel {
  quality: string = "high";
}

const myHotel = new BoutiqueHotel();

if (myHotel instanceof BoutiqueHotel) {
  console.log(myHotel.quality); // Outputs "high"
}
