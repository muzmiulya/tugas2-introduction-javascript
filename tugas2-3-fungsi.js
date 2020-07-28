/*
Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array). 
Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5.
Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir, 
mengurutkan hasil pencarian dan menampilkannya ke layar/console.

*/


function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
    let i = dataArray.length
    if (nilaiAwal > nilaiAkhir){
        return console.log("Nilai akhir harus lebih besar dari nilai awal")
    }else if(i <= 5){
        return console.log("Jumlah angka dalam dataArray harus lebih dari 5")
    }else {
        let j = dataArray.filter(function(nilai) {
            return nilai >= nilaiAwal && nilai <= nilaiAkhir
        })
        // let j = []
        // for(let z = 0; z < dataArray.length; z++){
        //     if(dataArray[z] >= nilaiAwal && dataArray[z] <= nilaiAkhir){
        //         j.push(dataArray[z])
        //     }
        // }
        // console.log(j)
        let k = j.sort(function(a, b){
            return a - b
        })
        console.log(k)
    }
}
seleksiNilai (8, 28, [3, 5, 90, 72, 26, 31, 20, 12])

