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
        const body = {
            email: email.value,
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
            location.replace('./mis-tareas.html')
        })
        .catch(err => console.log(err))
    };


});