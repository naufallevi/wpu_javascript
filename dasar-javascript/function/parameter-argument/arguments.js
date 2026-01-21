function addition() {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
    console.log("Menambahkan " + arguments[i] + ", total sekarang: " + sum);
  }
  
  return sum;
}

var result = addition(100, 10, 1000, 1);
console.log(result);
