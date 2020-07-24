/* NOMOR 4
Dari data dibawah ini
let data = {
id: 1,
name: "Leanne Graham",
username: "Bret",
email: "Sincere@april.biz",
address: 
{
street: "Kulas Light",
suite: "Apt. 556",
city: "Gwenborough",
zipcode: "92998-3874",
},
phone: "1-770-736-8031 x56442",
website: "hildegard.org",
}

a. Ubahlah data  tersebut menggunakan spread operator menjadi: 
name: nama anda
email: email anda
hobby: hobi anda

b. Ambilah data “street dan city” tersebut menggunakan destructuring
*/


let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}


// a. spread operator
let myPersonal = {
    name: "Muhammad Muzmi' Ulya",
    email: "muhammadmuzmiulya@gmail.com",
    hobby: "Papercraft"
}

data = {...data, ...myPersonal}
console.log(data)

// b. destructuring
const {street, city} = data.address
console.log(street)
console.log(city)