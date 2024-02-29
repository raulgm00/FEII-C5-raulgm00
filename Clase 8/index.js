const main = document.querySelector('main')
const errSection = document.getElementById('errores')
const form = document.getElementById('form-example')

// Ejemplo simple con input y button
// function obtenerDatos(){
//     const input = document.getElementById('miInput')
//     const nombre = input.value
//     console.log('El nombre es ' + nombre)
// }

// Ejemplo con form con input y validaciones 
form.addEventListener('submit', (event) => {
    event.preventDefault()

    const nombre = document.getElementById('input-name').value
    const email = document.getElementById('input-email').value
    console.log(nombre, email)
    
    if(nombre.length > 3){
        const h2 = document.createElement('h2')
        h2.textContent = 'Bienvenido, ' + nombre
        main.appendChild(h2)
        errSection.innerHTML = ''
        // main.innerHTML += `<h2>Bienvenido, ${nombre}</h2>`
    } else {
        errSection.innerHTML = '<p style="color:red">El nombre debe contener al menos 3 caracteres.</p>'
    }
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    console.log(emailRegex.test(email))
    if(emailRegex.test(email)) {
        const h4 = document.createElement('h4')
        h4.textContent = 'Email: ' + email
        main.appendChild(h4)
        errSection.innerHTML = ''
        // main.innerHTML += `<h4>Email: ${email}</h4>`
    } else {
        errSection.innerHTML = '<p style="color:red">Coloque un email válido.</p>'
    }
})

// Ejemplo con input radio

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const nameSelected = document.querySelector('input[name="check-name"]:checked')
    console.log(nameSelected)
    // const h2 = document.createElement('h2')
    // h2.textContent = 'Bienvenido, ' + nombre
    // main.appendChild(h2)
    if(nameSelected) {
        const nombre = nameSelected.value
        main.innerHTML = `<h2>Bienvenido, ${nombre}</h2>`
    } else {
        alert('Por favor, seleccione un nombre.')
    }
})

// Ejemplo con select
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const selectExample = document.getElementById('select-example')
    const nombre = selectExample.value
    console.log(nombre)

    if(nombre !== ""){
        main.innerHTML = `<h2>Bienvenido, ${nombre}</h2>`
    } else {
        alert('Por favor, seleccione un nombre.')
    }

})