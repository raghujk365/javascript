function linearSearch(arr, val) {
  let result = {
    index: -1,
    iterations: 0
  };
  
  for (let i = 0; i < arr.length; i++) {
    result.iterations++;
    if (arr[i] === val) {
      result.index = i;
      break;
    }
  }
  
  return result;
}


const arr = [1,3,4,6,7,9,8];
const val = 4;
const searchResult = linearSearch(arr, val);

if (searchResult.index === -1) {
  console.log(`${val} not found in the array.`);
} else {
  console.log(`${val} found at index ${searchResult.index} after ${searchResult.iterations} iterations.`);
}
