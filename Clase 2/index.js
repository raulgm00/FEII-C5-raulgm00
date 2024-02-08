// Peticiones y alertas al usuario
alert('Esto es un mensaje de alerta')
const confirmacion = confirm('Acepta los requisitos?')
const nombre = prompt('Como es tu nombre?')
console.log(confirmacion)
console.log(nombre)
document.body.innerHTML += `<p>Hola, ${nombre}</p>`


// Metodos Math
// floor y ceil
const decNum = 5.78
const floorNum = Math.floor(decNum)
const ceilNum = Math.ceil(decNum)
console.log(floorNum)
console.log(ceilNum)

// min y max
const number1 = 15
const number2 = 47
const number3 = 83
const number4 = 2

//Caso con spread operator
// const numbers = [15, 47, 83, 2]
// const maxNum = Math.max(...numbers) //Math.max(15, 47, 83, 2)
// const minNum = Math.min(...numbers) //Math.min(15, 47, 83, 2)

const maxNum = Math.max(number1, number2, number3, number4)
const minNum = Math.min(number1, number2, number3, number4)
console.log(maxNum)
console.log(minNum)


// Numeros random
const randomNum = Math.random() // [0, 1)
console.log(randomNum)

const valorRandom = Math.floor(Math.random() * 100) + 1 // Numero entre el 1 y el 100
console.log(valorRandom)


//For...[of] y For...{in} 
let array = ['gregory', 'adriana', 'denis']

for(let nombre of array){ //for(let i = 0; i < array.length; i++)
    console.log(nombre)
}
// array.forEach((nombre) => console.log(nombre))

let myObj = {
    a: 1,
    b: 2,
    c: 3
}
for(let clave in myObj){
    console.log(clave, myObj[clave]) //myObj.a || myObj.b || myObj.c
}
let datos = {
    email: 'Fabian@gmail.com',
    status: 'in progress...'
}

let objArray = [
    {
        name: 'Fabian',
        subject: 'FEII',
        ...datos
    },
    {
        name: 'Junior',
        subject: 'FEII'
    },
    {
        name: 'David',
        subject: 'FEII'
    },
]
console.log(objArray)
for(let obj of objArray){
    for(let clave in obj){
        console.log(clave, obj[clave])
    }
}