/*
Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan  
callback function dengan data sebagai berikut:
const name = [
‘Abigail’, ‘Alexandra’, ‘Alison’,
‘Amanda’, ‘Angela’, ’Bella’,
‘Carol’, ‘Caroline’, ‘Carolyn’,
‘Deirdre’, ‘Diana’, ‘Elizabeth’,
‘Ella’, ‘Faith’, ‘Olivia’, ‘Penelope’]


Contoh:
searchName(“an”, 3, callback)

Output: 
[“Alexandra”,”Amanda”,”Angela”]
*/

const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"]


function searchName(cariKata, banyakOutput, showOutput){
    let nametoLowerCase = name.map(function(value){
        return value.toLowerCase()
    })
    let nama = nametoLowerCase.filter(function(value){
        return value.includes(cariKata)
    })
    let sliced = nama.slice(0, banyakOutput)
    let nametoUpperCase = sliced.map (function(value){
        return value.charAt(0).toUpperCase() + value.substr(1)
    })
    showOutput(nametoUpperCase)
}

function callback(hasil){
    console.log(hasil)
}
searchName("an", 3, callback)

