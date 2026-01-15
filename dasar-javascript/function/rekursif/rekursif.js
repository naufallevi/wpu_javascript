function showNumbers(n) {
  if (n === 0) return;
  console.log("Masuk ke fungsi showNumbers dengan n = " + n);
  console.log(n);
  return showNumbers(n - 1);
}
showNumbers(10);
