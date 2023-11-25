/**
 * Use keyof with types
 */
namespace ss {
  type Staff = {
    name: string;
    age: number;
  };

  type StaffKeys = keyof Staff; // 'name' || 'age'

  const staff: Staff = {
    name: "Tom",
    age: 18,
  };

  function getStaffInfoByKey(key: StaffKeys) {
    console.log(staff[key]);
  }
  getStaffInfoByKey("name"); // Tom
  getStaffInfoByKey("salary");
  // error TS2345: Argument of type '"salary"' is not assignable to parameter of type 'keyof Staff'.
}
/**
 * Use keyof with interfaces
 */
namespace ss {
  interface Staff {
    name: string;
    age: number;
  }
  type StaffKeys = keyof Staff; //  "name" | "age"
  const staff = {
    name: "Tom",
    age: 18,
  };
  function getStaffInfoByKey(key: StaffKeys) {
    console.log(staff[key]);
  }
  getStaffInfoByKey("name"); // Tom
  getStaffInfoByKey("salary");
  // error TS2345: Argument of type '"salary"' is not assignable to parameter of type 'keyof Staff'.
}
/**
 * Use keyof with objects
 */
namespace ss {
  const staff = {
    name: "Tom",
    age: 18,
  };
  type StaffKeys = keyof typeof staff; //  "name" | "age"
  function getStaffInfoByKey(key: StaffKeys) {
    console.log(staff[key]);
  }
  getStaffInfoByKey("name"); // Tom
  getStaffInfoByKey("salary");
  // error TS2345: Argument of type '"salary"' is not assignable to parameter of type 'keyof Staff'.
}
/**
 * Use keyof with classes
 */
namespace ss {
  class Staff {
    constructor(public name: string, public age: number) {}
  }
  // keyof
  type StaffKeys = keyof Staff; // "name" | "age"
  function getStaffInfoByKey(staff: Staff, key: StaffKeys) {
    return staff[key];
  }
  const staff = new Staff("Jack", 32);
  console.log(getStaffInfoByKey(staff, "name")); // Jack
  console.log(getStaffInfoByKey(staff, "salary"));
  // error TS2345: Argument of type '"salary"' is not assignable to parameter of type 'keyof Staff'.
}
/**
 * Use keyof with generics
 */
namespace ss {
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  const randomData = {
    name: "John",
    age: 30,
  };
  console.log(getProperty(randomData, "name")); // John
  console.log(getProperty(randomData, "age")); // 30
  console.log(getProperty(randomData, "location"));
  // error TS2345: Argument of type '"location"' is not assignable to parameter of type '"name" | "age"'.
}
/**
 * Using keyof with mapped types
 */
namespace ss {
  type Visibility<T> = {
    [Key in keyof T]: boolean;
  };
  type Staff = {
    name: string;
    age: number;
  };
  type StaffDetailVisibility = Visibility<Staff>;
  // result
  /*
      type StaffDetailVisibility = {
        name: boolean; 
        age: boolean; 
      } 
      */
}
/**
 * Using keyof with conditional mapped types
 */
namespace ss {
  type Visibility<T> = {
    [Key in keyof T]: T[Key] extends Function ? Function : boolean;
  };
  type Staff = {
    name: string;
    age: number;
    report: () => void;
  };
  type StaffDetailVisibility = Visibility<Staff>;
  // result
  /*
      type StaffDetailVisibility = {
        name: boolean; 
        age: boolean; 
        report: Function;
      } 
      */
}
