var penumpang = ["abc", undefined, "def"];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    penumpang.unshift(namaPenumpang);
    return penumpang;
  } else {
    penumpang.forEach(function (e) {
      console.log(penumpang);

      if (penumpang == undefined){
        penumpang = namaPenumpang;
      } else {
        penumpang.push(namaPenumpang);
      }
    });
  }
};

tambahPenumpang("ytrewq", penumpang);
// console.log(tambahPenumpang("qwerty", penumpang));
// penumpang.forEach(function (e) {
//   console.log(e);
// });
