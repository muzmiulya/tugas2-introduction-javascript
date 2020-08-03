/*
Buatlah Algoritma, Flowchart dan Code untuk soal dibawah ini:

Demy membeli makanan menggunakan aplikasi ArkFood. Dimana terdapat 2 buah kode promo: 
1. Promo ‘ARKAFOOD5’ dengan ketentuan pemesanan minimal 50rb akan mendapat diskon 50%, dengan maksimal potongan sebesar 50rb.
2. Promo ‘DITRAKTIRDEMY’ dengan ketentuan pemesanan minimal 25rb akan mendapatkan diskon 60%, dengan maksimal potongan sebesar 30rb.
3. Jika tidak menggunakan kode promo ‘false’
Untuk pengiriman sejauh 2km pertama akan dikenakan tarif 5rb, dan setiap satu kilometer selanjutnya dikenakan penambahan 3rb. Untuk beberapa restoran dikenakan pajak yakni 5% dari harga makanan yang dipesan (true), jika tidak dikenakan pajak (false).

TASK
1. Buatlah flowchart untuk membuat fungsi dibawah ini.          
2. Buatlah sebuah function yang menerima 4 parameter. 
    ArkFood(harga, voucher, jarak, pajak)

Example:
Input	: arkFood(75000, ‘ARKFOOD5’, 5, true)
Output	: 
Harga		: 75000	  
Potongan	: 37500
Biaya Antar	: 14000
Pajak		: 3750	  
SubTotal	: 55250

*/

//======================================================================

function arkFood(harga, voucher, jarak, pajak){
    if (typeof harga !== 'number'){
        return console.log("harga harus number")
    }else if(typeof voucher !=='string'){
        return console.log("voucher harus string")
    }else if(typeof jarak !== 'number'){
        return console.log("jarak harus number")
    }else if(typeof pajak !== 'boolean'){
        return console.log("pajak harus true or false")
    }
    let potongan2 = potongan(harga, voucher)
    let biayaAntar2 = biayaAntar(jarak)
    let biayaPajak2 = biayaPajak(harga, pajak)
    subTotal(harga, potongan2, biayaAntar2, biayaPajak2)
}
function potongan(harga2, voucher2){
    switch(voucher2){
        case 'ARKAFOOD5': {
            if(harga2 < 50000){
                console.log("penggunaan voucher ARKAFOOD5 harus minimal pesan 50000")
                return harga2 = 0
            }else if(harga2 >= 50000){
                harga2 = harga2/2
                if(harga2 > 50000){
                    harga2 = 50000
                }
            break
            }
        }
        case 'DITRAKTIRDEMY': {
            if(harga2 < 25000){
                console.log("penggunaan voucher DITRAKTIRDEMY harus minimal pesan 25000")
                return harga2 = 0
            }else if(harga2 >= 25000){
                harga2 = harga2 * 0.6
                if(harga2 > 30000){
                    harga2 = 30000
                }
            break
            }
        }
        default: {
            console.log("voucher anda tidak terdaftar")
            return harga2 = 0
        }
    }
    // console.log(harga2)
    return harga2
}

function biayaAntar(jarak2){
    let jarak3 = 5000
    if (jarak2 <= 2){
        return jarak3
    }else if(jarak2 > 2){
        jarak3 = jarak3 + ((jarak2 - 2)*3000)
    }
    return jarak3
    // console.log(jarak2)
}

function biayaPajak(harga3,pajak2){
    if (pajak2 === false){
        return pajak2 = 0
    }else if(pajak2 === true){
        pajak2 = harga3 * 0.05
    }
    return pajak2
    // console.log(pajak2)
}

function subTotal(harga, potongan2, biayaAntar2, biayaPajak2){
    let totalHarga = harga - potongan2 + biayaAntar2 + biayaPajak2
    console.log("Harga      : "+ harga)
    console.log("Potongan   : "+ potongan2)
    console.log("Biaya Antar: "+ biayaAntar2)
    console.log("Pajak      : "+ biayaPajak2)
    console.log("SubTotal   : "+ totalHarga)
}
arkFood(150000,'DITRAKTIRDEMY', 5, false)



