var makanan = "steak";

switch (makanan) {
  case "nasi goreng":
  case "nasi megono":
    console.log("makanan dalam negeri");
    break;
  case "steak":
  case "sushi":
  case "burger":
    console.log("makanan luar negeri");
    break;
  default:
    console.log("makanan tidak dikenal");
    break;
}
