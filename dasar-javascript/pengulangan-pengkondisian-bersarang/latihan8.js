var s = "";

for (var i = 0; i < 5; i++) {
  for (var k = 0; k < 5 - i; k++) {
    s += " ";
  }

  var angka = 1;

  for (var j = 0; j <= i; j++) {
    s += angka + " ";
    angka *= (i - j) / (j + 1);
  }
  s += "\n";
}

console.log(s);
