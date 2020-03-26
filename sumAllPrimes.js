
function sumPrimes(num) {
    let sum = 0;
    let numarr = [];
    for (let i = 0; i <= num; i++) {
      numarr[i] = 1;
    }
    for (let start = 2; start <= Math.sqrt(num); start++) {
      if (numarr[start] == 1) {
        for (let i = 2; i < num; i++) {
          if (start * i <= num) {
            numarr[start * i] = 0;
          } else {
            break;
          }
        }
      }
      
    }
    for (let i = 2; i <= num; i++) {
      if (numarr[i] === 1) {
        sum += i;
      }
    }
    console.log(sum);
    console.log(numarr)
    return sum;
  
  }
  
  // O(n * sqrt(n))
  /*
  function isPrime(n) {
    for (let i = 2; i <= n/2; i++) {
      if (n%i === 0) {
        return false;
      }
    }
    return true;
  }
  function sumPrimes(num) {
    let arr = [];
    for (let i = 2; i <= num ; i++) {
      if (isPrime(i)) {
        arr.push(i);
        
      }
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    
    return sum;
  }
  */
  
  
  sumPrimes(10);
  