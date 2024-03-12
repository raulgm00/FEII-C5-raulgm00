
// Ejemplo básico de Promise
let x = true
const promesa = new Promise((resolve, reject) => {
    if(x){
        resolve('Se pudo resolver la promesa')
    }
    reject('Error: No se pudo resolver la promesa')
})

// promesa.then((respuesta) => {
//     console.log(respuesta)
// }).catch((err) => {
//     console.log(err)
// })

// Otro ejemplo de Promise
const obtenerInfo = (exito) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(exito){
                resolve(['a', 'b', 'c', 'd'])
            } else {
                reject('Error al obtener los datos')
            }
        }, 2000)
    })
}

//Como sería con .then
obtenerInfo(true)
.then((respuesta) => console.log(respuesta))
.catch((err) => console.log(err))

// Como sería con async await - try/catch
async function manejarDatos() {
    try{
        const respuesta = await obtenerInfo(false)
        console.log(respuesta)
    } catch(err) {
        console.log(err)
    }
}
manejarDatos()

// Ejemplo de promise con un array de objetos
const paises = [
    { nombre: "Argentina", capital: "Buenos Aires" },
    { nombre: "Bolivia", capital: "La Paz" },
    { nombre: "Brasil", capital: "Brasilia" },
    { nombre: "Chile", capital: "Santiago" },
    { nombre: "Colombia", capital: "Bogotá" },
    { nombre: "Ecuador", capital: "Quito" },
    { nombre: "Guyana", capital: "Georgetown" },
    { nombre: "Paraguay", capital: "Asunción" },
    { nombre: "Perú", capital: "Lima" },
    { nombre: "Surinam", capital: "Paramaribo" },
    { nombre: "Uruguay", capital: "Montevideo" },
    { nombre: "Venezuela", capital: "Caracas" }
  ];

const obtenerPaises = (exito) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(exito){
                resolve(paises)
            } else {
                reject('Error al obtener los datos')
            }
        }, 2000)
    })
}

obtenerPaises(true)
.then(paises => {
    const ul = document.createElement('ul')
    paises.forEach(item => {
        // console.log(item)
        ul.innerHTML += `<li>País: ${item.nombre} - Capital: ${item.capital}</li>`
    })
    document.body.appendChild(ul)
} )
.catch(err => console.log(err))


// Adelanto del método fetch
fetch('https://api.thecatapi.com/v1/images/search?limit=10')
.then(respuesta => {
    return respuesta.json()
})
.then((info) => {
    console.log(info)
    const main = document.querySelector('main')
    info.forEach((gatito) => {
        const img = document.createElement('img')
        img.setAttribute('width', 200)
        img.setAttribute('src', gatito.url)
        main.appendChild(img)
    })
})
.catch(err => console.log(err))