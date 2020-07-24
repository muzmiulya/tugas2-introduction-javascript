/* NOMOR 3
Buatlah program yang memiliki satu variabel dengan nama “printSegitiga” 
yg berisi tipe data number yang menghasilkan output segitiga terbalik yang berisi angka
Contoh: 
const printSegitiga = 5

Output: 
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

*/

const printSegitiga = 9


if (typeof(printSegitiga) === 'string') {
    console.log("Data harus number")
}


for (i = printSegitiga; i >= 1; i--){
    hasil = ''
    for (j = 1; j <= i; j++){
        hasil += j
    }
    console.log(hasil)
}