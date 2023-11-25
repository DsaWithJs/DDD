namespace ss {
  const BATMAN_ENEMY = {
    JOKER: "JOKER",
    BANE: "BANE",
    SCARECROW: "SCARECROW",
  } as const;

  type ObjectValues<T> = T[keyof T];

  type BatmanEnemy = ObjectValues<typeof BATMAN_ENEMY>;

  type BatmanEnemy2 = keyof typeof BATMAN_ENEMY;

  function batmanAttack(message: string, enemy: BatmanEnemy) {
    //do something
  }

  batmanAttack("I'M BATMAN", BATMAN_ENEMY.JOKER);
  batmanAttack("I'M BATMAN", "JOKER");
}
