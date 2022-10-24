let people = [
    {
        age: 1000,
        name: "Marceline",
        surname: "Petrickoff"
    },
    {
        age: 38,
        name: "Simon",
        surname: "Petrickoff"
    },
    {
        age: 16,
        name: "Finn",
        surname: "Martens"
    },
    {
        age: 20,
        name: "Jake",
        surname:'"The Dog"'
    },
    {
        age: 8,
        name: "Bmo",
        surname: "moe"
    }
]

let oldEnoughToDrive = []

people.forEach(person => {
    if(person.age >= 16){
        oldEnoughToDrive.push(person.name + ", " + person.surname + ", " + person.age, "; ")
    }
});

console.log(oldEnoughToDrive)