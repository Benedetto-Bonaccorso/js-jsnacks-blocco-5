let string = "Esempio"
let reversedString = ""

for(let i = string.length - 1; i >= 0; i--){
    console.log(string[i])
    reversedString += string[i]
}

console.log(reversedString)