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
