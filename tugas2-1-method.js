// Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya

//SORT() = mengurutkan elemen didalam array
// let mobil = ["Bugati", "Lamborghini", "BMW"]
// let sortMobil = mobil.sort()
// console.log(sortMobil)

//MAP() = membuat array baru dengan kondisi sesuai yang diinginkan
// let handphone = [
//     {merk: "Samsung", harga: "Rp 3.000.000,00"},
//     {merk: "Nokia", harga: "Rp 2.500.000,00"},
//     {merk: "Oppo", harga: "Rp 2.000.000,00"}
// ]
// let merkHarga = handphone.map((value) => ({merkHarga: `Hp bermerk ${value.merk} berharga ${value.harga}`}))
// console.log(merkHarga)

//FILTER() = membuat array baru yang berisi semua elemen dari array sebelumnya yang telah diproses dengan 
//          fungsi filter dan hasilnya true
// let panjang = [23, 25, 6, 9, 38, 54, 20]
// let checkPanjang = panjang.filter((value2) => value2 >= 20)
// console.log(checkPanjang)

//PUSH() = menambahkan satu atau lebih elemen ke akhir array 
// let game = ["Halo", "Dota", "Counter Strike"]
// game.push("Overwatch")
// console.log(game)

//FROM() = membuat array dari suatu object (Array = array constructor)
// let buatArray = Array.from("Javascript")
// console.log(buatArray)

//SLICE() = mengekstrak bagian dari string, dimulai dari karakter pada posisi tertentu dan berakhir 
//          pada karakter pada posisi tertentu juga (start, ends)
// let statement = "Saya belajar Javascript"
// let sliced = statement.slice(5, 12)
// console.log(sliced)

//SUBSTR() = mengekstrak bagian dari string, dimulai dari karakter pada posisi tertentu, dan panjang karakter yang
//          ingin diekstrak (start, length)
// let statement2 = "Saya belajar HTML"
// let substracted = statement2.substr(2, 9)
// console.log(substracted)

//SHIFT() = menghilangkan elemen pertama dari sebuah array dan mengembalikan elemen tersebut
// let nama = ["Abigail", "Charles", "Dony", "Maria", "Zack"]
// let shifted = nama.shift()
// console.log(shifted)

//POP() = menghilangkan elemen terakhir dari sebuah array dan mengembalikan elemen tersebut
// let nama = ["Abigail", "Charles", "Dony", "Maria", "Zack"]
// let popped = nama.pop()
// console.log(popped)

//FILL() = menggantikan semua elemen array dengan nilai yang ditentukan
// let motorcycle = ["Yamaha", "Honda", "Kawasaki", "Suzuki"]
// let filled = motorcycle.fill("BMW")
// console.log(filled)
