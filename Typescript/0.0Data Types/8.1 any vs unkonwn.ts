namespace ss {
  let val: unknown;

  val = true; // Fine
  val = 42; // Fine
  val = "hey!"; // Fine
  val = []; // Fine
  val = {}; // Fine
  val = Math.random; // Fine
  val = null; // Fine
  val = undefined; // Fine
  val = () => {
    console.log("Hey again!");
  }; // Fine
}
namespace ss {
  let val: any;

  val = true; // Fine
  val = 42; // Fine
  val = "hey!"; // Fine
  val = []; // Fine
  val = {}; // Fine
  val = Math.random; // Fine
  val = null; // Fine
  val = undefined; // Fine
  val = () => {
    console.log("Hey again!");
  }; // Fine
}
/**
 * Assigning a value of type unknown to variables of other types:
 */
namespace ss {
  let val: unknown;

  const val1: unknown = val; // Fine
  const val2: any = val; // Fine
  const val3: boolean = val; // Will throw error
  const val4: number = val; // Will throw error
  const val5: string = val; // Will throw error
  const val6: Record<string, any> = val; // Will throw error
  const val7: any[] = val; // Will throw error
  const val8: (...args: any[]) => void = val; // Will throw error
}
