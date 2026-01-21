console.log("1. Menambahkan Elemen ke dalam Array");
var driver = [];
driver[1] = "Max Verstappen";
driver[2] = "Oscar Piastri";
driver[3] = "George Russell";
driver[5] = "Lewis Hamilton";
console.log(driver + "\n");

// ================================================

console.log("2. Menghapus Elemen dari Array");
var rider = ["Marc Marquez", "Alex Marquez", "Marco Bezzecchi", "Francesco Bagnaia"];
rider[2] = undefined;
// delete rider[2];
console.log(rider + "\n");

// ================================================

console.log("3. Menampilkan Array");
var ballPlayers = ["Lionel Messi", "Xavi Hernandez", "Andres Iniesta", "Sergio Busquets", "Gerrard Pique"];
var totalPlayers = ballPlayers.length;

for (var i = 0; i < totalPlayers; i++) {
  console.log("Pemain FC Barcelona ke-" + (i + 1) + " : " + ballPlayers[i]);
}
console.log("\n ================================================ \n");

// ================================================

console.log("Method pada Array");
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits + "\n");
// 1. Join
console.log("1. join");
console.log(fruits.join(" * ") + "\n");

// 2. push, pop
console.log("2. push, pop");
fruits.pop();
fruits.push("Durian");
console.log(fruits + "\n");

// 3. unshift, shift
console.log("3. unshift, shift");
fruits.shift();
fruits.shift();
fruits.unshift(["Banana", "Grape"]);
console.log(fruits + "\n");

// 4. splice
console.log("4. splice");
// splice(indexAwal, jumlahDataYangDihapus, dataBaru1, dataBaru2, ...);
// fruits.splice(1, 0, "Kiwi", "Lemon");
fruits.splice(1, 1, "Kiwi", "Lemon");
console.log(fruits + "\n");

// 5. slice
console.log("5. slice");
var f1Drivers = ["Lando Norris", "Oscar Piastri", "George Russell", "Kimi Antonelli", "Charles Leclerc", "Lewus Hamilton"];
var mercedesDrivers = f1Drivers.slice(2, 4);
console.log(f1Drivers.join(" - "));
console.log("Mercedes Driver: " + mercedesDrivers.join(" - ") + "\n");

// 6. forEach
console.log("6. forEach");
var number = [1, 2, 3, 4, 5];
number.forEach(function (expression) {
  console.log(expression);
});
console.log("\n ================================================ \n");

var narutoChars = ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake"];
narutoChars.forEach(function (e, i) {
  console.log("Karakter ke-" + (i + 1) + " adalah " + e);
});
console.log("\n ================================================ \n");

// 7. map
console.log("7. map");
var number = [1, 2, 3, 4, 5];
var numberMap = number.map(function (e) {
  return e + 1;
});
console.log(numberMap + "\n");

// 8. sort
console.log("8. sort");
var cars = ["Volvo", "BMW", "Audi", "Toyota", "Honda"];
cars.sort();
console.log(cars + "\n");

var randomNumber = [1, 5, 3, 66, 23, 10, 22, 80, 4];
// Ascending a - b
// Descending b - a
// =+ ba | =- ab
randomNumber.sort(function (a, b) {
  return a - b;
});
console.log(randomNumber + "\n");

// 9. filter, find
var angkaAcak = [10, 25, 3, 40, 15, 7, 60, 20];
var hasilFilter = angkaAcak.filter(function(e) {
  return e <= 10;
});

console.log("Angka: " + hasilFilter.join(" | ") + "\n");

var hasilFind = angkaAcak.find(function(e) {
  return e < 9
})

console.log("Angka: " + hasilFind + "\n");

