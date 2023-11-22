// Define a single object for status and color mapping
const StatusColorMap = {
  Unclaimed: { status: "unclaimed", color: "red" },
  Claimed: { status: "claimed", color: "blue" },
  // Add more status-color pairs here
} as const;

// Type for status
type StatusType = (typeof StatusColorMap)[keyof typeof StatusColorMap]["status"];

// Function to get the color based on status
function getColor(status: StatusType): string | null {
  // Find the color for the given status
  const entry = Object.values(StatusColorMap).find((entry) => entry.status === status);
  return entry ? entry.color : null;
}

// Example usage
const currentStatus: StatusType = StatusColorMap.Claimed.status;
const backgroundColor = getColor(currentStatus);
