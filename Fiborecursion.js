fibonacci(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    let fibSeries = fibonacci(n - 1);
    fibSeries[n] = fibSeries[n - 1] + fibSeries[n - 2];
    return fibSeries;
  }
}



console.log(fibonacci(6));  
console.log(fibonacci(0));
