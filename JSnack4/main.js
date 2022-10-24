let string1 = ["a","b","c"]
let string2 = ["a","b","c"]
let string3 = []


function mixer(stringA,stringB,stringC){
if(stringA.length == stringB.length){


    for(let i = 0; i < string1.length; i++){
        stringC.push(string1[i])
        stringC.push(string2[i])
    }

    console.log(stringC)
    }
}

mixer(string1,string2,string3)