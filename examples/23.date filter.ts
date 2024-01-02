const getExpiryTime = (expiration) => {
  const expiryDate = new Date(expiration.split("T")[0] + "T00:00:00"); // Set to start of the day
  const currentDate = new Date(new Date().toISOString().split("T")[0] + "T00:00:00"); // Current date at start of the day

  const timeDifference = expiryDate - currentDate;
  const daysUntilExpiry = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysUntilExpiry;
};
