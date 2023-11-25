(() => {
  // Define status and color as object constants
  const Status = {
    Unclaimed: "unclaimed",
    Claimed: "claimed",
  } as const;

  // Type for status (using the values of the Status object as possible values)
  type StatusType = (typeof Status)[keyof typeof Status];
})();
(() => {
  // Define a single object for status and color mapping
  const StatusColorMap = {
    Unclaimed: { status: "unclaimed", color: "red" },
    Claimed: { status: "claimed", color: "blue" },
    // Add more status-color pairs here
  } as const;

  type types = (typeof StatusColorMap)[keyof typeof StatusColorMap];

  type StatusType = (typeof StatusColorMap)[keyof typeof StatusColorMap]["status"];

  type colorType = (typeof StatusColorMap)[keyof typeof StatusColorMap]["color"];
})();
