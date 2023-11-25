//https://betterprogramming.pub/defensive-programming-and-the-use-of-typescript-cd7f9d86833b
namespace ss {
  let channels = [
    { id: 1, messages: [1, 2, 3] },
    { id: 2, messages: [4, 5] },
  ];

  let channel = channels.find((c) => c.id === 1);

  if (channel) {
    console.log(channel.id);

    channel.messages.map((message) => {
      console.log(channel.id);
    });
  }
}

namespace ss {
  const domElement = document.getElementById("root");
  const logInfo = window.localStorage.getItem("logInfo");

  // might be null because the DOM node may or may not exists in the DOM
  if (domElement !== null) {
    console.log(domElement.nodeName);
  }

  // might be null because the storage may or may not contain key "logInfo"
  if (logInfo !== null) {
    console.log(logInfo);
  }
}
