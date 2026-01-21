// Object Literal
var riderMotoGPDucati1 = {
  name: "Marc Marquez",
  team: "Ducati Lenovo Team",
  number: 93,
};

var riderMotoGPDucati2 = {
  name: "Francesco Bagnaia",
  team: "Ducati Lenovo Team",
  number: 63,
};

console.log(riderMotoGPDucati1);
console.log(riderMotoGPDucati2);

console.log("==============================");
// Object Function Declaration
function createDriverF1(name, team, number) {
  var driver = {};
  driver.name = name;
  driver.team = team;
  driver.number = number;
  return driver;
}

console.log(createDriverF1("Max Verstappern", "Red Bull Racing", 33));
console.log(createDriverF1("George Russell", "Mercedes-AMG Petronas F1 Team", 63).team);
var lando1 = createDriverF1("Lando Norris", "McLaren F1 Team", 1);
console.log(lando1);

console.log("==============================");
// Object Constructor
function createFootballPlayer(name, club, position) {
  this.name = name;
  this.club = club;
  this.position = position;
}

var player1 = new createFootballPlayer("Virgil van Dijk", "Liverpool FC", "Defender");
console.log(player1);