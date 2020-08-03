//PALINDROM

function palindrom(kata){
    const kataReversed = kata.split("").reverse().join("")
    
    if (typeof kata !== 'string'){
        return console.log("masukkan string")
    }else if(kata == kataReversed){
        return console.log("Palindrom")
    }else{
        return console.log("Bukan Palindrom")
    }
}
palindrom("saya")


//REVERSE WORDS

function reversedWord(kataBerspasi){
    if (typeof kataBerspasi !== 'string'){
        return console.log("masukkan string")
    }else if(kataBerspasi.includes(" ")){
        const reversedWords = kataBerspasi.split(" ").reverse().join(" ")
        console.log(reversedWords)
    }else{
        console.log("masukkan kata berspasi")
    }
}
reversedWord("saya sudah kuliah")