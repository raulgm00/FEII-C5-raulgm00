// window
console.log(window)

const width = window.innerWidth
const height = window.innerHeight
console.log(width)
console.log(innerHeight)

if(width < 768) {
    console.log('tablet o celular')
} else if(width > 768){
    console.log('pc/notebook/smartTV')
}

// const nombre = prompt('Indique el nombre de usuario')
const nombre = 'julian'
function navegar(){
    window.open('https://playground.digitalhouse.com/' + nombre, '_blank')
}

// document
console.log(document)
const div = document.getElementById('root')
console.log(div)

const paragraphs = document.getElementsByTagName('p')
console.log(paragraphs)

const idP = document.getElementById('primerParagraph')
idP.style.color = '#ED254E'
const classP = document.getElementsByClassName('segundoParagraph')
classP[0].style.color = '#F9DC5C'
classP[1].style.color = '#C2EABD'
console.log(idP)
console.log('classP', classP)

const queryh2 = document.querySelector('h2')
console.log(queryh2)

const queryP = document.querySelectorAll('p')
console.log(queryP)
for(let i = 0; i < queryP.length; i++){
    queryP[i].style.backgroundColor = '#0B4F6C'
}

// Ejemplo jquery
// $(".myClass").css( "border", "3px solid red" ); 

const nav = document.getElementsByTagName('nav')
nav[0].style.display = 'flex'
nav[0].style.flexDirection = 'column'

const section = document.getElementById('inners')
section.innerHTML += `<p>Hola, Denis</p>` //Ejemplo innerHTML
section.innerText += `<p>Hola, Raul</p>` //Ejemplo innerText 

let age = 30

console.log('Hola, soy ' + nombre + ' y tengo ' + age + ' años')
console.log(`Hola, soy ${nombre} y tengo ${age} años`)

const contenido = `
    <h2>Hola, soy ${nombre}</h2> 
    <p>tengo ${age} años</p>
`

const divTempStrings = document.getElementById('tempStrings')
divTempStrings.innerHTML += contenido


function generarArticulos(titulo, descripcion){
    let articuloHTML = `
        <h2>${titulo}</h2>
        <h4>${descripcion}</h4>
    `
    return articuloHTML
}


const contenedorArticulos = document.getElementById('contenedor-articulos')
console.log(contenedorArticulos)

contenedorArticulos.innerHTML += generarArticulos('Titulo de articulo 1', 'Descripcion del articulo 1')
contenedorArticulos.innerHTML += generarArticulos('Titulo de articulo 2', 'Descripcion del articulo 2') 
contenedorArticulos.innerHTML += generarArticulos('Titulo de articulo 3', 'Descripcion del articulo 3')

// Ejemplos de añadir y remover classNames
nav[0].classList.add('navegador')
nav[0].classList.remove('navegador')
nav[0].classList.toggle('navegador')

// createElement
let newP = document.createElement('p')

newP.textContent = 'Esto es un paragraph creado con el método de createElement'

const divAppend = document.getElementById('ejemplo-create')
console.log(divAppend)

divAppend.appendChild(newP)

function generarElementos(titulo){
    let h2 = document.createElement('h2')
    h2.textContent = titulo

    return h2
}

const sectionCreate = document.getElementById('creador-articulos')
console.log(sectionCreate)

sectionCreate.appendChild(generarElementos('Articulo creado 1'))
sectionCreate.appendChild(generarElementos('Articulo creado 2'))
sectionCreate.appendChild(generarElementos('Articulo creado 3'))
