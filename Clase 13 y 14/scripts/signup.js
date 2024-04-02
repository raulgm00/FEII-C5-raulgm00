window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const url = 'https://todo-api.ctd.academy/v1';
    const form = document.querySelector('form')
    const email = document.getElementById('inputEmail')
    const pass = document.getElementById('inputPassword')
    const passRepeat = document.getElementById('inputPasswordRepetida')
    const nombre = document.getElementById('inputNombre')
    const apellido = document.getElementById('inputApellido')

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        console.log('haciendo el submit')

        if(!validarTexto(nombre.value)){
            alert('El nombre debe tener al menos 3 caracteres ')
            return;
        }
        if(!validarTexto(apellido.value)){
            alert('El apellido debe tener al menos 3 caracteres ')
            return;
        }
        if(!validarEmail(email.value)){
            alert('El email debe ser válido ')
            return;
        }
        if(!validarContrasenia(pass.value)){
            alert('La contraseña debe tener al menos 6 caracteres')
            return;
        }
        if(!compararContrasenias(pass.value, passRepeat.value)){
            alert('Las contraseñas no coinciden')
            return;
        }

        const body = {
            firstName: normalizarTexto(nombre.value),
            lastName: normalizarTexto(apellido.value),
            email: normalizarEmail(email.value),
            password: pass.value
        }
        const settings = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        realizarRegister(settings)
    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(settings) {
        fetch(`${url}/users`, settings)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('jwt', data.jwt)
            console.log('Pudiste registrar')
            location.replace('./mis-tareas.html')
            alert('Usuario creado con exito')
        })
        .catch(err => console.log(err))
       

        
    };


});