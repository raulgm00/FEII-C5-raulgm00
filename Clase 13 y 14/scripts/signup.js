window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const url = 'https://todo-api.ctd.academy/v1';
    const form = document.querySelector('form')
    const email = document.getElementById('inputEmail')
    const pass = document.getElementById('inputPassword')
    const nombre = document.getElementById('inputNombre')
    const apellido = document.getElementById('inputApellido')

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        console.log('haciendo el submit')
        const body = {
            firstName: nombre.value,
            lastName: apellido.value,
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