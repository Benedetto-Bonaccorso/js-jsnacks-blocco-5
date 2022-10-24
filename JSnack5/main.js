let array = ["1","2","3","4","5","6","7","8","9"]

let a = 2
let b = 7

let finalArray = []

if(b <= array.length){
    for(let i = a; i < b - 1; i++){
        finalArray.push(array[i])
    }
}

console.log(finalArray)