/*
Buatlah sambungan program menggunakan then catch dan juga try catch untuk mengecek hari kerja dari 
kode Asynchronous dibawah dan jelaskan penggunaan then catch dan try catch dengan 
memberikan komentar di bawahnya:
*/
const cekHariKerja = (day) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item===day
            })
            if (cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}

cekHariKerja('senin')
.then((day) => {
    console.log("Hari ini adalah hari " +day)
})
.catch((error) => {
    console.log(error)
})

/*
.then akan dipanggil saat dimana promise kondisi resolve sementara .catch dipanggil saat
promise kondisi reject atau gagal
*/

async function hmmm(day){
    try {
        day = await cekHariKerja(day)
        console.log("Hari ini adalah hari "+day)
    }catch(error){
        console.log(error)
    }
}
hmmm('rabu')

/*
try memungkinkan untuk menguji block of code agar mengetahui error atau tidak
sementara cathc adalah block of code yang menampilkan error jika pada try terjadi error
*/
