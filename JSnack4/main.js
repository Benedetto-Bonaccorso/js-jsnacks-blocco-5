let string1 = ["a","b","c"]
let string2 = ["a","b","c"]
let string3 = []

if(string1.length == string2.length){


    for(let i = 0; i < string1.length; i++){
        string3.push(string1[i])
        string3.push(string2[i])
    }

    console.log(string3)
}