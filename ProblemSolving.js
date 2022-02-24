// A Problem Solving

// A.1
function findOppositeNumber(n, inputNumber){

    let findOppositeNumber;
    if (n>=4 && n<=20 && n%2==0 && inputNumber<n/2) {
      findOppositeNumber = inputNumber + n/2;
      console.log(findOppositeNumber);
    } if (n>=4 && n<=20 && n%2==0 && inputNumber>=n/2) {
      findOppositeNumber = inputNumber - n/2;
      console.log(findOppositeNumber);
    }
  }
  findOppositeNumber(10,6);
  findOppositeNumber(10,2);
  findOppositeNumber(12,2);
  findOppositeNumber(12,1);
  findOppositeNumber(12,3);
  findOppositeNumber(12,5);


  // A.2
function merge2String(a, b) {
  let i;
  let c = Math.min(a.length, b.length);
  let merge2String = '';
  for( i = 0; i < c; i++) {
    merge2String += a[i] + b[i];
    // console.log(merge2String)
  }
  return merge2String + a.slice(i) + b.slice(i);
}

console.log(merge2String("abc", "123"));
console.log(merge2String("abc", "0123")); 
console.log(merge2String("abcd", "123")); 
console.log(merge2String("sddfgfhghmabcd", "123")); 
console.log(merge2String("abcd", "12123456783")); 
console.log(merge2String("abcd56s7fd8", "15asd6d7823")); 