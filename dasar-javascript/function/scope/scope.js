// global or window variabel
// "use strict";
var a = 10;

function testScope(a) {
  // local or function variabel
  var a;
  a += 15;
  console.log(a);
}

testScope(12);
console.log("---");
console.log(a);
