/**
 * Problem Example
 */

type Bike = {
  price: number;
  name: string;
  productType: number; //enum 1 - Electric, 2 - Mechanical
  tires: string;
  weight: number;
  length: number;
  height: number;
};
type TennisRacquet = {
  name: string;
  price: number;
  brand: number; // enum 1 - Babolat, 2 - Head, 3- Wilson
  weight: number;
  gripSize: number;
  size: number;
  racquetStrings: string[];
};

namespace ss {
  // Average Bike Cost
  const averageBikeCost = (bikes: Bike[]): number => {
    const sum: number = bikes.map((bike) => bike.price).reduce((val, sum) => val + sum, 0);

    const average = sum / bikes.length;
    return average;
  };

  // Average Tennis Racquet Cost
  const averageTennisRacquetCost = (tennisRacquets: TennisRacquet[]): number => {
    const sum: number = tennisRacquets.map((tennisRacquet) => tennisRacquet.price).reduce((val, sum) => val + sum, 0);

    const average = sum / tennisRacquets.length;
    return average;
  };
}

/**
 * Both these functions look fairly identical, except for the type.
 * We could combine these two functions, without much difficulty since both just use the price.
 */
namespace ss {
  const averageProductCost = (products: TennisRacquet[] | Bike[]): number => {
    const sum: number = products.map((product) => product.price).reduce((val, sum) => val + sum, 0);

    const average = sum / products.length;
    return average;
  };
}
