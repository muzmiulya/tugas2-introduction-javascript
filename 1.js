/* NOMOR 1
Buat variabel dengan nama biodata dan tipe
data  object dengan value dan tipe data sebagai
berikut:
-name(string)
-age(number)
-hobbies(array)
-IsMaried(boolean)
-schoolList(Array of Object) with key
    name, yearIn, yearOut, and major
    (if any, if no set "null")
-skills (Array of Obj) with key skillName
    and level (beginner, advanced, expert)
-interestInCoding (Boolean)*/

const biodata = {
    name: "Muhammad Muzmi' Ulya",
    age: 24,
    hobbies: ["Papercraft", "Bersepeda"],
    isMaried: false,
    schoolList: [
        {name: "Universitas Brawijaya"},
        {yearIn: 2013},
        {yearOut: 2017},
        {major: "Teknik Mesin"}
    ],
    skills: [
        {skillName: "Javascript"},
        {level: "beginner"}
    ],
    interestInCoding: true
}
console.log(biodata)