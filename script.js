function firstWord(s) {
  // your code here
	function firstWord(str) {
    // Trim leading spaces to make sure we get the actual first word
    str = str.trimStart();

    // Find the index of the first space
    const spaceIndex = str.indexOf(' ');

    // If there's no space, return the whole string
    if (spaceIndex === -1) {
        return str;
    }

    // Otherwise, return the substring up to the first space
    return str.substring(0, spaceIndex);
}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
