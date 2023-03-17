function fibonacci(n) {
  let fibSeries = [];

  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    fibSeries = [0, 1];

    for (let i = 2; i <= n; i++) {
      let nextFib = fibSeries[i - 1] + fibSeries[i - 2];
      fibSeries[i] = nextFib;
    }

    return fibSeries;
  }
}



console.log(fibonacci(7));
