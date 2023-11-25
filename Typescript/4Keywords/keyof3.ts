/**
 * The keyof operator extracts the keys from an interface.
 */
namespace ss {
  interface DishMenu {
    mainCourse: string;
    dessert: string;
  }

  const dailyMenu: DishMenu = {
    mainCourse: "Grilled Chicken",
    dessert: "Chocolate Cake",
  };

  function updateMenu(menu: DishMenu, dishEntry: keyof DishMenu, newDish: string) {
    menu[dishEntry] = newDish;
  }

  // Valid usage - Updating menu dishes
  updateMenu(dailyMenu, "mainCourse", "Salmon");

  // Invalid usage - Incorrect or non-existent dish entries
  updateMenu(dailyMenu, "beverage", "Iced Tea"); // 'beverage' does not exist in DishMenu
}
