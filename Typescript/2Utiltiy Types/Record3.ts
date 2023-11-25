namespace ss {
  type Category = "live" | "prob" | "sport" | "lottery" | "card";
  type CollapseSwitch = Record<Category, boolean>;

  /*
    type CollapseSwitch = {
      live: boolean;
      prob: boolean;
      sport: boolean;
      lottery: boolean;
      card: boolean;
    };*/

  type Coord = Partial<Record<"x" | "y", number>>;

  /*  type Coord = {
    x?: number;
    y?: number;
  };*/
}
