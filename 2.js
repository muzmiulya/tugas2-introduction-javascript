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

const mtk = 82
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69

if (mtk == null || bahasaIndonesia == null || bahasaInggris == null || ipa == null){
    console.log("Semua nilai harus diisi")
    return
}
let rata2 = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4
console.log(rata2)

if (rata2 < 60){
    console.log("E")
}else if(rata2 < 70){
    console.log("D")
}else if(rata2 < 80){
    console.log("C")
}else if(rata2 < 90){
    console.log("B")
}else if(rata2 < 100){
    console.log("A")
}