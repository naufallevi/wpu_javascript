var a = 8;
var b = 3;

var volA = a ** 3;
var volB = b ** 3;

var totVolume = volA + volB;

console.log("Tanpa function: " + totVolume);

function hitungVolumeKubus(sisiA, sisiB) {
  var volumeA;
  var volumeB;
  var totalVolume;

  volumeA = sisiA ** 3;
  volumeB = sisiB ** 3;
  totalVolume = volumeA + volumeB;

  return totalVolume;
}

console.log("Dengan function: " + hitungVolumeKubus(8, 3));
console.log("Dengan function: " +hitungVolumeKubus(15, 20));