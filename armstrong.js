function isArmstrong(number){
    const digits=
     number.toString().split()
     const numDigits = digits.length;
      let sum=0
                             
      digits.forEach((digit) => {
       sum+=Math.pow(digit,numDigits);
     });
    
    return sum===number;
  }
  console.log(isArmstrong(371));
  console.log(isArmstrong(321));
