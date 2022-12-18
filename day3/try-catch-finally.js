/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    // Reverse the string using the split, reverse, and join methods
    s = s.split('').reverse().join('');
  } catch (e) {
    // Print the exception's message
    console.log(e.message);
  } finally {
    // Print the original or reversed string
    console.log(s);
  }
}
