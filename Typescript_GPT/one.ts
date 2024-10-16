type literal = "one" | "two" | "three";
const filesds: { [key in literal]: string } = {
  one: "",
  two: "",
  three: "three",
};
