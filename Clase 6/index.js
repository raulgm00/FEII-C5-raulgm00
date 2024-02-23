// onload
// window.addEventListener('load', () => {
//     console.log('Pagina cargada 3')
// })
// window.addEventListener('load', () => {
//     console.log('Pagina cargada 4')
// })

// Metodo mouseover y mouseout
const div = document.getElementById('root')
const contenedor = document.getElementById('contenedor')
div.addEventListener('mouseover', () => {
    div.innerHTML = `<p>Quita el mouse de mi</p>`

    contenedor.innerHTML = `
        <p>Elemento 1</p>
        <p>Elemento 2</p>
        <p>Elemento 3</p>
    `
})


div.addEventListener('mouseout', () => {
    div.innerHTML = `<p>Reposa el mouse sobre mi</p>`

    contenedor.innerHTML = ''
})


//preventDefault
const aTag = document.getElementById('anchor')

aTag.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Veo que clickeaste el enlace')
    const question = confirm('Estas seguro de salir de este sitio?')
    if(question){
        setTimeout(() => {
            window.open('https://playground.digitalhouse.com/login')
        }, 2000)
    }
    console.log(event)
})

// onKeyDown, onKeyUp y onKeyPress
const pTag = document.getElementById('keypress')
document.addEventListener('keypress', (event) => {
    console.log(event.key)
    pTag.innerText = `Tocaste ${event.key} tecla`
    if(event.key === 'Enter'){
        console.log('Tocaste la tecla enter')
    }
})

document.addEventListener('keydown', (event) => {
    console.log('Apretaste ' + event.key)
})
document.addEventListener('keyup', (event) => {
    console.log('Soltaste ' + event.key)
})

const contador = document.getElementById('contador')

let cantSegundos = 0;
let intervalo; 


document.addEventListener('keydown', () => {
    if(!intervalo){
        intervalo = setInterval(() => {
            cantSegundos++;
            contador.textContent = `Tiempo: ${cantSegundos} segundos`
        }, 1000)
    }
    
})

document.addEventListener('keyup', () => {
    clearInterval(intervalo)
    intervalo = null;
    cantSegundos = 0;
})