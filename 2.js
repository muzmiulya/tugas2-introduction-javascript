/* NOMOR 2
Buat program yang menghitung rata-rata UN beserta gradenya, 
dengan mengisi 4 nilai yakni Bahasa indonesia, 
Bahasa Inggris Matematika dan IPA, yang di dalam program 
tersebut memiliki validasi yaitu semua nilai tersebut harus 
diisi dan juga untuk grade memiliki kondisi dengan ketentuan sebagai berikut:
90 - 100 = A
80 - 89 = B
70 - 79 = C
60 - 69 = D
0 - 59 = E
*/

const mtk = 89
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 90

// if (mtk == null || bahasaIndonesia == null || bahasaInggris == null || ipa == null){
//     console.log("Semua nilai harus diisi")
//     return
// }

if (typeof (mtk, bahasaIndonesia, bahasaInggris, ipa) !== 'number'){
    console.log("nilai harus diisi number")
    return
}

let rata2 = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4
console.log("Nilai anda adalah " + rata2)

if (rata2 < 60){
    console.log("Grade = E")
}else if(rata2 < 70){
    console.log("Grade = D")
}else if(rata2 < 80){
    console.log("Grade = C")
}else if(rata2 < 90){
    console.log("Grade = B")
}else if(rata2 < 100){
    console.log("Grade = A")
}
