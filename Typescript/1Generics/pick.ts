type Pick2<Type, Keys extends keyof Type> = {
  [Key in Keys]: Type[Key];
};

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  rating: number;
  reviews: string[];
};
type WithoutPersonalInfo = Pick2<User, "id" | "rating" | "reviews">;
// equivalent to:
type WithoutPersonalInfo2 = {
  id: User["id"];
  rating: User["rating"];
  reviewers: User["reviews"];
};
// usage example:
const user: WithoutPersonalInfo = {
  id: 1,
  rating: 4,
  reviews: ["userexamplecom"],
};
