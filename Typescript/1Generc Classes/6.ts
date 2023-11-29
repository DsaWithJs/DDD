namespace ss {
  class Car {
    label: string = "Generic Car";
    numWheels: Number = 4;
    horn() {
      return "beep beep!";
    }
  }

  class Truck extends Car {
    label = "Truck";
    numWheels = 18;
  }

  class Vespa extends Car {
    label = "Vespa";
    numWheels = 2;
  }

  function washCar<T extends Car>(car: T): T {
    console.log(`Received a ${car.label} in the car wash.`);
    console.log(`Cleaning all ${car.numWheels} tires.`);
    console.log("Beeping horn -", car.horn());
    console.log("Returning your car now");
    return car;
  }

  const myVespa = new Vespa();
  washCar<Vespa>(myVespa);

  const myTruck = new Truck();
  washCar<Truck>(myTruck);
}
