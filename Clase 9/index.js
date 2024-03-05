const form = document.querySelector('#miFormulario')
const main = document.querySelector('main')
const errGroup = document.createElement('ul')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    while (errGroup.firstChild) {
        errGroup.removeChild(errGroup.firstChild)
    }

    const nombre = document.getElementById('nombre').value
    const email = document.getElementById('email').value
    const edad = document.getElementById('edad').value
    const pais = document.getElementById('pais').value
    const pref1 = document.getElementById('preferencia1').checked
    const pref2 = document.getElementById('preferencia2').checked
    const usuario = document.querySelector('input[name="tipoUsuario"]:checked')

    let errores = []
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(nombre.length < 3){
        errores.push('El nombre debe tener al menos 3 caracteres')
    }
    if(!emailRegex.test(email)) {
        errores.push('Mail debe ser válido')
    }
    if(edad === '' || parseInt(edad) <= 0){
        errores.push('Debe colocar una edad válidas')
    }
    if(pais == ""){
        errores.push('Debe seleccionar un país')
    }
    if(!pref1 && !pref2){
        errores.push('Debe seleccionar al menos una preferencia')
    }
    if(!usuario){
        errores.push('Debe seleccionar un tipo de usuario')
    }

    if(errores.length > 0){
        errores.forEach((error) => {
            const li = document.createElement('li')
            li.textContent = error
            errGroup.appendChild(li)
        })
        document.body.appendChild(errGroup)
    } else {
        //Inyectar info del form en main
        main.innerHTML = `
            <h1>Datos de usuario</h1>
            <p> Nombre: <span>${nombre}</span></p>
            <p> Email: <span>${email}</span></p>
            <p> Edad: <span>${edad}</span></p>
            <p> Pais: <span>${pais}</span></p>
            <p> Usuario: <span>${usuario.value}</span></p>
        `
        form.reset()

        //Redirección a usuario.html
        // window.location.href = 'usuario.html'
    }
})

// Obtención de query Params
// const queryParams = new URLSearchParams(window.location.search)
// const search = queryParams.get('search')
// const edad = queryParams.get('edad')
// console.log(search)
// console.log(edad)
