namespace ss {
  type ShinyThings = "🍎" | "🍊" | "🍇" | "💎";
  type RaccoonDiet = "🍎" | "🍊" | "🍇";
  type RaccoonFood = Extract<ShinyThings, RaccoonDiet>;

  let dinner: RaccoonFood = "💎";

  // Error: Type '"💎"' is not assignable to type '"🍎" | "🍊" | "🍇"'.
}
