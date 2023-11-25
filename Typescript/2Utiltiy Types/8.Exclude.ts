namespace ss {
  type Food = "🍎" | "🍊" | "🍇" | "🥦" | "🥕";
  type Vegetable = "🥦" | "🥕";
  type RaccoonDiet = Exclude<Food, Vegetable>;
}

namespace ss {
  type MoreFood = "🍎" | "🍊" | "🍇" | "🥦" | "🥕" | "🍞" | "🍪";
  type NotRaccoonFood = "🥦" | "🥕" | "🍞";
  type NewRaccoonDiet = Exclude<MoreFood, NotRaccoonFood>;
}
