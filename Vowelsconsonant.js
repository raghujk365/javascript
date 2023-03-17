function countVowelsAndConsonants(str) {
  const vowels = 'aeiouAEIOU';
  let vowelCount = 0;
  let consonantCount = 0;
  
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
    } else if (char.match(/[a-z]/i)) {
      consonantCount++;
    }
  }
  
  return {
    vowelCount: vowelCount,
    consonantCount: consonantCount
  };
}

const sentence = "How many vowels in a given sentence";
const counts = countVowelsAndConsonants(sentence);

console.log(`Number of vowels: ${counts.vowelCount}`);
console.log(`Number of consonants: ${counts.consonantCount}`);
