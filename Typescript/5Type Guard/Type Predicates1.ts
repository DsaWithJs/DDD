namespace ss {
  interface BatmanFriends {
    name: string;
    isFriend: boolean;
    costume: string;
  }

  interface BatmanEnemies {
    name: string;
    isEnemy: boolean;
  }

  type BatmanCharacters = BatmanFriends | BatmanEnemies; //=> this is a union type

  function isBatmanFriend(character: BatmanCharacters): character is BatmanFriends {
    return (character as BatmanFriends).isFriend ? true : false;
  }

  function attackTogetherWrong(character: BatmanCharacters) {
    console.log(character.costume, "ATTACK TOGETHER!!! BIFF💥! POW💥!! BAM💥!");
  }

  function attackTogether(character: BatmanCharacters) {
    if (isBatmanFriend(character)) {
      console.log(character.costume, "ATTACK TOGETHER!!! BIFF💥! POW💥!! BAM💥! ");
    }
  }
}
