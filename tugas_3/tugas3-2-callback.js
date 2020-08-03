/*
Buat program menggunakan callback function untuk melanjutkan dan 
menampilkan semua bulan menggunakan method map

*/

const getMonth = (callback) =>{
    setTimeout(()=>{
        let error = false
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August',
        'September', 'October', 'November', 'Desember']
        if(!error){
            callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found', []))

        }
    }, 4000)
}

function callbackBro(adaError, bulan){
    if (adaError !== null){
        console.log(adaError)
    }else{
        bulan.map(value => console.log(value))
    }
}
getMonth(callbackBro)