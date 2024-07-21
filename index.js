
function isPalindrome(word) {
  // Write your algorithm here
  let forwards = 0;
  let backwards = word.length - 1;
  if (
    word[forwards].toLowerCase() !== word[backwards].toLowerCase() &&
    word[forwards].toLowerCase() < word[backwards].toLowerCase()
  ) {
    return false;
  }
  forwards++;
  backwards--;

  return true;
}

/* 
  Add your pseudocode here
  Initialize two pointers, forwards and backwards respectively.
 
   If characters at forwards and backwards pointers are not equal and forwards is less than backwards , return false.
 
  // If the loop completes without returning false, the word is a palindrome, return true.

*/

/*
  Add written explanation of your solution here
  /* 

  This function uses two pointers, one starting from the forward of the word and the other from the backward. 
  It compares the characters at these pointers and moves towards the center of the word. 
  If at any point the characters are not equal, the word is not a palindrome, and the function returns false. 
  If the loop completes without returning false, the word is a palindrome, and the function returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;