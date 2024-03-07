window.addEventListener('load', () => {

    
    const lsUser = JSON.parse(localStorage.getItem('user'))
    const ssUser = JSON.parse(sessionStorage.getItem('user'))
    console.log(lsUser, ssUser)

    if(lsUser || ssUser) {
        location.replace(`usuario.html`)
    }

    const form = document.querySelector('#miFormulario')
    const main = document.querySelector('main')
    const errGroup = document.createElement('ul')
   
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    
        while (errGroup.firstChild) {
            errGroup.removeChild(errGroup.firstChild)
        }
        const usuario =  document.querySelector('input[name="tipoUsuario"]:checked')
        const user = {
             nombre : document.getElementById('nombre').value,
             email : document.getElementById('email').value,
             edad : document.getElementById('edad').value,
             pais : document.getElementById('pais').value,
             pref1 : document.getElementById('preferencia1').checked,
             pref2 : document.getElementById('preferencia2').checked,
             usuario : usuario?.value
        }
        //Operación ternaria
        // condicion ? true : false
    
        let errores = []
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(user.nombre.length < 3){
            errores.push('El nombre debe tener al menos 3 caracteres')
        }
        if(!emailRegex.test(user.email)) {
            errores.push('Mail debe ser válido')
        }
        if(user.edad === '' || parseInt(user.edad) <= 0){
            errores.push('Debe colocar una edad válidas')
        }
        if(user.pais == ""){
            errores.push('Debe seleccionar un país')
        }
        if(!user.pref1 && !user.pref2){
            errores.push('Debe seleccionar al menos una preferencia')
        }
        if(!user.usuario){
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
            // Ejemplo para enviar params mediante un for in con un objeto
            // const queryParams = new URLSearchParams(window.location.search)
            
            // for(let key in user){
            //     queryParams.set(key, user[key])
            // }
            // console.log(queryParams.toString())
            // location.replace(`usuario.html?${queryParams.toString()}`)
    
            // Enviar datos mediante local y session Storage
            localStorage.setItem('user', JSON.stringify(user))
            sessionStorage.setItem('user', JSON.stringify(user))
 
            //Redirección a usuario.html
            location.replace(`usuario.html`)
        }
    })
})

// Obtención de query Params
// const queryParams = new URLSearchParams(window.location.search)
// const search = queryParams.get('search')
// const edad = queryParams.get('edad')
// console.log(search)
// console.log(edad)
