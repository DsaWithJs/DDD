namespace ss {
  type Mapache = {
    age: number;
    emoji: string;
  };

  type MapacheName = "Rocky" | "Bandit" | "Rascal";

  const mapaches: Record<MapacheName, Mapache> = {
    Rocky: { age: 2, emoji: "🦝" },
    Bandit: { age: 3, emoji: "🦝" },
    Rascal: { age: 1, emoji: "🦝" },
  };

  console.log(mapaches.Rocky);

  console.log(mapaches.azrael); // undefined
}
