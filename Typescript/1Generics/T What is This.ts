/**
 * what does that thing <T> even mean 😨?
 *like () serves for declaring function parameters, 
 *<> serves for declaring Type parameters.
 *So, in this case, T is a type parameter for our function,
 * */

const sendToSqs = <T,>(data: T): T => {
  // Logic
  console.log(data);
  // return data
  return data;
};
interface DataForQueue1 {
  payload: string;
  timestamp: string;
  auth: string;
}
interface DataForQueue2 {
  payload: string;
  timestamp: string;
}

const payloadQueue1 = sendToSqs<DataForQueue1>({
  payload: "Payload for Queue 1",
  timestamp: new Date().toISOString(),
  auth: "TOKEN",
});

const payloadQueue2 = sendToSqs<DataForQueue2>({
  payload: "Payload for Queue 2",
  timestamp: new Date().toISOString(),
});
