function countEvenOddNumbers(arr) {
  let evenCount = 0;
  let oddCount = 0;
  
  for (let num of arr) {
    if (num % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  
  return {
    evenCount: evenCount,
    oddCount: oddCount
  };
}


const numbers = [3,6,8,7,13,98,76];
const counts = countEvenOddNumbers(numbers);

console.log(`Number of even numbers: ${counts.evenCount}`);
console.log(`Number of odd numbers: ${counts.oddCount}`);
