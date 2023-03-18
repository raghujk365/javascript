function sumofDigits(number) {
    let sum = 0;
    while (number) {
    sum += number%10;
    number = Math.floor(number/10);
    
     }
     return sum;
     }
     const number = 12345;
     const sum = sumOfDigits(number);
     console.log(`The sum of digits in ${number} is ${sum} `.);
    