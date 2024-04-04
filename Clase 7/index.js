// prompt y confirm

let nombre = ''
let pic = ''
// Obtiene el id del elemento
const main = document.querySelector('#container')

while(!nombre || nombre.length < 3){
    nombre = prompt('Coloque su nombre aquí:')
}
while(!pic || !pic.includes('http')){
    pic = prompt('Coloque la url de su foto de perfil:')
}

let plantas = confirm('Te gustan las plantas?')

if(plantas){
    main.style.backgroundImage = "url('https://ichef.bbci.co.uk/images/ic/1008xn/p07w02gy.jpg')"
}


//Ejemplo con innerHTML, setAttribute y createElement/appendChild

main.innerHTML += `<h1>Bienvenido, ${nombre}</h1>`

const img = document.createElement('img')

img.setAttribute('src', pic) // https://vetsonparker.com.au/wp-content/uploads/2015/04/Rabbit-Facts.jpg

main.appendChild(img)

// Eventos

const themeBtn = document.getElementById('theme')
const header = document.querySelector('header')

const bgColors = [
    'black',
    '#f95959',
    '#680747',
    '#283739',
    '#680747'
]

themeBtn.addEventListener('click', () => {
    const rdmColor = Math.floor(Math.random() * 5)
    console.log(rdmColor)

    header.style.backgroundColor = bgColors[rdmColor]
}) 

//keyup y keydown

document.addEventListener('keydown', (event) => {
    // console.log(event.key)
    if(event.key === 'v'){
        main.innerHTML = '<h3>Tocaste el botón secreto y ahora tenes acceso a información confidencial</h3>'
    } 
})

document.addEventListener('keyup', (event) => {
    if(event.key === 'v') {
        main.innerHTML = ''
    }
})

// keypress 

const footer = document.querySelector('footer')

document.addEventListener('keypress', (event) => {
    if(event.key === 'f') {
        // if(footer.classList.contains('hidden-footer')){
        //     footer.classList.remove('hidden-footer')
        //     footer.classList.add('shown-footer')
        // } else {
        //     footer.classList.remove('shown-footer')
        //     footer.classList.add('hidden-footer')
        // }
        footer.classList.toggle('hidden-footer')
        footer.classList.toggle('shown-footer')
    }
})