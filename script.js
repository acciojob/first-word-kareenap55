function firstWord(str) {
  // Trim leading spaces to handle cases like ' Hello'
  str = str.trimStart();
  
  // Find the index of the first space
  const spaceIndex = str.indexOf(' ');

  // If no space found, return the whole string
  if (spaceIndex === -1) {
    return str;
  }

  // Return substring from beginning to first space
  return str.substring(0, spaceIndex);
}