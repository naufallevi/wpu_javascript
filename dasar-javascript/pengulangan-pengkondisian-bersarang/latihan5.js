var s = "";

for (var i = 0; i < 5; i++) {
  for (var k = 0; k < 5 - i; k++) {
    s += " ";
  }
  for (var j = 0; j < 2 * i + 1; j++) {
    s += "*";
  }
  s += "\n";
}

console.log(s);

//      *
//     ***
//    *****
//   *******
//  *********