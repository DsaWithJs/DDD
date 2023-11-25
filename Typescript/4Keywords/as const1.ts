/**
 * Enums are dead, alternative is as const
 */
namespace ss {
  const Genre = {
    Rock: "Rock",
    Pop: "Pop",
    HipHop: "Hip Hop",
    Jazz: "Jazz",
    Country: "Country",
  } as const;
  function playSong(genre: (typeof Genre)[keyof typeof Genre]) {
    // Play a song based on the provided genre
  }

  playSong(Genre.Rock); // Works perfectly fine

  // Works perfectly fine with as const
  playSong("Hip Hop");
}
namespace ss {
  const UrgencyLevel = {
    Low: { level: "Low", color: "#7DBA00" },
    Medium: { level: "Medium", color: "#FFB900" },
    High: { level: "High", color: "#E74856" },
  } as const;
  function sendMessage(urgency: (typeof UrgencyLevel)[keyof typeof UrgencyLevel]) {
    // Send the message with the specified urgency level
  }

  sendMessage(UrgencyLevel.Low); // Works perfectly fine
  sendMessage({ level: "Medium", color: "#FFB900" }); // Also works correctly
  sendMessage(UrgencyLevel.High); // Works perfectly fine as well
}
