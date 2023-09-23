export default function capitalizeFirstLetters(inputString: string): string {
  // Split the input string into words
  const words = inputString.split(" ");

  // Capitalize the first letter of each word and join them back together
  const capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word; // Handle empty strings if needed
    }
  });

  // Join the capitalized words into a single string
  const capitalizedString = capitalizedWords.join(" ");

  return capitalizedString;
}
