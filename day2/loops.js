/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
const knownVowels = 'aeiou'

function checkVowel(char) {
  return knownVowels.indexOf(char) !== - 1
}

function vowelsAndConsonants(s) {
  let vowels = []
  let consonants = []

  for (let char of s) {
    checkVowel(char) ? vowels.push(char) : consonants.push(char)
  }

  vowels.forEach(element => console.log(element))
  consonants.forEach(element => console.log(element))
}
