function multiply(a,b){
      return a % b == 0 ? 'It is Even':'Not Even';
}

let executeMultiply = multiply.bind(this,10);
console.log(executeMultiply(11));
