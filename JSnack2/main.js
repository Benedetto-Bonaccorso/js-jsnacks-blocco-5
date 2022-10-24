let zucchine = [
    {
        length: 10,
        weight: 12
    },
    {
        length: 12,
        weight: 10
    },
    {
        length: 16,
        weight: 14
    },
    {
        length: 20,
        weight: 18
    },
    {
        length: 8,
        weight: 6
    },
    {
        length: 32,
        weight: 20
    },{
        length: 15,
        weight: 18
    },
    {
        length: 23,
        weight: 14
    },
    {
        length: 28,
        weight: 30
    },
    {
        length: 33,
        weight: 32
    },
    {
        length: 52,
        weight: 40
    },
]

let totalWeightUnder15cm = 0
let totalWeightOver15cm = 0

zucchine.forEach(zucchina => {
    if(zucchina.length <=15){
        totalWeightOver15cm += zucchina.weight
    } else if(zucchina.length >=15){
        totalWeightUnder15cm += zucchina.weight
    }
});

console.log(totalWeightOver15cm, totalWeightUnder15cm)