function formatPhoneNumber(phoneNumber: string): string {
  // Remove any non-digit characters from the phone number
  const digits = phoneNumber.replace(/\D/g, "");

  // Check if the number has at least 10 digits
  if (digits.length >= 10) {
    // Use a regular expression to format the first 10 digits
    // and then append any extra digits at the end
    return digits.replace(/(\d{3})(\d{3})(\d{4})(\d*)/, "($1)$2-$3$4");
  } else {
    // Return the original input if it's less than 10 digits
    return phoneNumber;
  }
}

// Example usage
const formattedNumber = formatPhoneNumber("1234567890123");
console.log(formattedNumber); // Output for more than 10 digits: "(123)456-7890123"

const formattedNumber2 = formatPhoneNumber("1234567890");
console.log(formattedNumber2); // Output for exactly 10 digits: "(123)456-7890"
