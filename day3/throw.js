/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
  const b = parseInt(a)
  if (b === 0) {
    throw new Error("Zero Error")
  } else if (b < 0) {
    throw new Error("Negative Error")
  } else {
    return "YES"
  }
}
