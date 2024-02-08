// let
// var
// const

console.log('Aca es donde vamos a debuggear')
alert('Enviar una alerta al usuario')
let name = prompt('Coloque su nombre:')
console.log(name)

if(!name){
    name = prompt('Debe colocar un nombre:')
}
name = 2 || 'palabra' || [] || [1,2,3,4] || {}
if(name === null  || name === undefined || name === false || name === ''){
    console.log('Name da true')
} else {
    console.log('name es igual a null o undefined')
}

for(let i = 1; i <= 10; i++){
    if(i % 2 !== 0) {
        console.log(i)
    }
}
let x = 0
while(x <= 10){
    console.log(x)
    x++
}

do{
    console.log(x)
    x++
}while(x <= 10)

let verduras = ['lechuga', 'cebolla', 'papa']
verduras.push('zanahoria')
verduras.pop()
verduras.unshift('berenjena')
verduras.shift()

verduras[1] = 'zanahoria'
console.log(verduras)

let obj = {
    name: 'Eduardo',
    email: 'eduardo@gmail.com',
    age: 32
}

console.log(obj.email)

function myFunc() {
    console.log('En 10 años vas a tener',obj.age + 10)
}
myFunc()

const sum = (x,y) => {
    console.log('Resultado: ', x+y)
}
sum(183, 47)