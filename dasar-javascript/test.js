// Data produk
var produk = [
  { nama: "Laptop", stok: 5, aktif: true, harga: 10000000 },
  { nama: "Mouse", stok: 0, aktif: true, harga: 500000 },
  { nama: "Keyboard", stok: 10, aktif: true, harga: 800000 },
  { nama: "Monitor", stok: 3, aktif: false, harga: 3000000 },
  { nama: "Speaker", stok: 7, aktif: true, harga: 1200000 }
];

// Filter produk yang ready (stok > 0 dan aktif === true)
var produkReady = produk.filter(function adaStoknya(produk) {
  return produk.stok > 0 && produk.aktif === true;
});

// Menampilkan hasil
console.log("=== PRODUK READY STOK ===");
console.log("Total: " + produkReady.length + " produk\n");

// Tampilkan dalam format tabel
console.log("No. | Nama      | Stok | Harga");
console.log("----|-----------|------|------------");
produkReady.forEach(function(produk, index) {
  console.log(
    (index + 1).toString().padEnd(4) + "| " +
    produk.nama.padEnd(10) + "| " +
    produk.stok.toString().padEnd(5) + "| Rp " +
    produk.harga.toLocaleString('id-ID')
  );
});

// Atau tampilkan hanya nama produk
console.log("\nNama produk yang ready:");
var namaProdukReady = produkReady.map(function(p) {
  return p.nama;
});
console.log(namaProdukReady.join(", "));