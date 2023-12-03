namespace ss {
  type Keys = "name" | "age" | "hobby" | "email";

  const man1: Record<Keys, string | number> = {
    name: "bytefer",
    aeg: 36, // Error
    hobby: "programming",
  };

  man1.email = "bytefer@gmail.com"; // Ok
}
namespace ss {
  type Keys = "name" | "age" | "hobby" | "email";

  const man2 = {
    name: "bytefer",
    age: 36,
    hobby: "programming",
  } satisfies Partial<Record<Keys, string | number>>;

  man2.name.toLowerCase(); // Ok
  man2.age.toFixed(); // Ok
}
namespace ss {
  type Keys = "name" | "age" | "hobby" | "email";

  const man3 = {
    name: "bytefer",
    age: 36,
    hobby: "programming",
    email: "bytefer@gmail.com",
  } satisfies Record<Keys, string | number>;

  man3.age.toFixed(); // Ok
  man3.email.toLowerCase(); // Ok
}
namespace ss {
  type RGBColor = { r: number; g: number; b: number };

  const RGBPalette = {
    red: { r: 255, g: 0, b: 0 },
    green: { r: 0, g: 255, d: 0 }, // Error
    blue: { r: 0, g: 0, b: 255 },
  } satisfies Record<string, RGBColor>;
}
