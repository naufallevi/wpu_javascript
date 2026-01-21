var driver = {
  name: "Sebastian Vettel",
  dateBirth: "03 July 1987",
  locationBirth: {
    city: "Heppenheim",
    country: "Germany",
  },
  team: ["BMW Sauber F1 Team", "Scuderia Toro Rosso", "Red Bull Racing", "Scuderia Ferrari", "Aston Martin"],
};

console.log(driver.name);
console.log(driver.locationBirth);
console.log(driver.locationBirth.country);
console.log(driver["dateBirth"]);
console.log(driver["team"][3]);
console.log(driver.team[2]);
console.log(driver["locationBirth"]["city"]);
