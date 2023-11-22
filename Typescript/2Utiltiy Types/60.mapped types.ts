//It takes a type and turns it into another type in an organized
// and deliberate way.

/*
Mapped types Syntax

[P in K]: T
*/

type union = "firstname" | "lastname";

const obj1 = {
  firstname: "wassim",
  lastname: "nassour",
};

type keys = keyof typeof obj1;

//Let’s create a mapped type that switches all strings in the obj to a boolean

type obj2 = {
  firstname: string;
  lastname: string;
};

type objBolean = {
  [K in keyof obj2]: boolean;
};

/*
type objBolean = {
    firstname: boolean;
    lastname: boolean;
};
*/
