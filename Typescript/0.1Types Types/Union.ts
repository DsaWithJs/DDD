// https://javascript.plainenglish.io/learn-typescript-in-5-min-part-5-union-types-4cba933c679b

namespace ss{
    /** not correct, because in this it can be both error and data or neither 
or data which is an impossible scenario.
The more correct way is to use union type.
**/

 type Result<T> = {
    error?: string;
    data?: T;
   }
   
   /** This is correct, it indicates either you have error or data **/
   
    type ResultWithUnion<T> = {
    | {
         error: string;
      }
    | {
         data: T;
      }
   }
}
namespace ss{
    export type ResultWithUnion<T> = {
        | {
             error: string;
          }
        | {
             data: T;
          }
       }
       
       const test = (result: ResultWithUnion<number>) => {
         if("error" in result) {
            return result.error;
         } else {
            return result.data;
         }
       }
}

/**
 * correct example
 */
namespace ss{
     type Result3<T> = {
        | {
             type: "error";
             error: string;
          }
        | {
             type: "success";
             data: T;
          }
       }
       
       const test = (result: Result3<number>) => {
         if(result.type === "error") {
            return result.error;
         } else {
            return result.data;
         }
       }
}