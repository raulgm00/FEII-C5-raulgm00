window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
   
    const url = 'https://todo-api.ctd.academy/v1';
    const form = document.querySelector('form')
    const email = document.getElementById('inputEmail')
    const pass = document.getElementById('inputPassword')

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        console.log('haciendo el submit')
        mostrarSpinner()
        if(!validarEmail(email.value)){
            alert('El email debe ser válido ')
            return;
        }
        if(!validarContrasenia(pass.value)){
            alert('La contraseña debe tener al menos 6 caracteres')
            return;
        }

        const body = {
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




        realizarLogin(settings)

        form.reset()
    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(settings) {
        fetch(`${url}/users/login`, settings)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('jwt', data.jwt)
            console.log('Pudiste loguear')
            setTimeout(() => {
                ocultarSpinner()
                location.replace('./mis-tareas.html')
            }, 2000)
            
        })
        .catch(err => {
            ocultarSpinner()
            console.log(err)
        })
    };


});