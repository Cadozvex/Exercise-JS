//Function to find the middle value of a word
const getMiddle = (word) => {
  // Trim leading and trailing spaces of the given word
  const trimmedWord = word.trim();

  // Calculate the length of the trimmed word
  const length = trimmedWord.length;

  // If the length of the word is odd, return the character in the middle
  if (length % 2 === 1) {
    return trimmedWord.charAt(Math.floor(length / 2));
  } else {
    // Otherwise, take the two characters in the middle
    return trimmedWord.substr(length / 2 - 1, 2);
  }
};
// Test
console.log(getMiddle("      test    "));
console.log(getMiddle("      testing"));
console.log(getMiddle("middle       "));
console.log(getMiddle("A"));
