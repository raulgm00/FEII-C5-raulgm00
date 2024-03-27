// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.

/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {

  /* ---------------- variables globales y llamado a funciones ---------------- */
  
  const token = localStorage.getItem('jwt')
  if(!token){
    location.replace('./index.html')
  }
  const url = 'https://todo-api.ctd.academy/v1';
  const btnCerrarSesion = document.querySelector('#closeApp')
  const formCrearTarea = document.querySelector('.nueva-tarea')

  obtenerNombreUsuario()
  consultarTareas()
  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener('click', function () {
    
    const cerrarConfirm = confirm('¿Estas seguro que quieres salir?')
    if(cerrarConfirm) {
      console.log('cerraste sesión')
      localStorage.removeItem('jwt')
      location.replace('./index.html')
    }
  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    const settings = {
      method: 'GET',
      headers: {
        Authorization: token
      }
    }
    fetch(`${url}/users/getMe`, settings)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const userName = document.querySelector('.user-info p')
      userName.innerText = data.firstName
    })
  };


  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
    fetch(`${url}/tasks`, {
      method: 'GET',
      headers: {
        Authorization: token
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      renderizarTareas(data) //Paso el listado a renderizarTareas
      botonesCambioEstado()
      botonBorrarTarea()
    })
  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener('submit', function (event) {
    event.preventDefault()
    const nuevaTarea = document.querySelector('#nuevaTarea')

    const body = {
      description: nuevaTarea.value.trim(),
      // completed: false, //por default va false
    }
    const settings = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type' : 'application/json',
        Authorization: token
      }
    }
    fetch(`${url}/tasks`, settings)
    .then(res => res.json())
    .then(tarea => {
      console.log(tarea)
      consultarTareas()
    })
    .catch(err => console.log(err))

    formCrearTarea.reset()
  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {

    //Obtengo los contenedores para cada tarea
    const tareasPendientes = document.querySelector('.tareas-pendientes')
    const tareasTerminadas = document.querySelector('.tareas-terminadas')

    // Limpio ambos contenedores en caso de que haya algun elemento anterior
    tareasPendientes.innerHTML = ''
    tareasTerminadas.innerHTML = ''

    //Obtengo y renderizo el numero total de tareas finalizadas
    const nroTerminadas = document.querySelector('#cantidad-finalizadas')
    let contador = 0
    nroTerminadas.innerText = contador


    // Realizo una iteración donde voy a renderizar la lista de tareas
    // Utilizo listado que lo trae por parametro desde la función consultarTareas
    listado.forEach(tarea => {
      let fecha = new Date(tarea.createdAt); //Configuro la fecha
      // Realizo una condición donde si la tarea está completada 
      // lo renderizo en un contenedor o en otro
      if(tarea.completed) {
        contador++ // Sumo al contador para renderizar el número de tareas terminadas
        tareasTerminadas.innerHTML += `
        <li class="tarea">
          <div class="hecha">
            <i class="fa-regular fa-circle-check"></i>
          </div>
          <div class="descripcion">
            <p class="nombre">${tarea.description}</p>
            <div class="cambios-estados">
              <button class="change incompleta" id="${tarea.id}" ><i class="fa-solid fa-rotate-left"></i></button>
              <button class="borrar" id="${tarea.id}"><i class="fa-regular fa-trash-can"></i></button>
            </div>
          </div>
        </li>`
      } else {
        tareasPendientes.innerHTML += `
        <li class="tarea">
          <button class="change" id="${tarea.id}"><i class="fa-regular fa-circle"></i></button>
          <div class="descripcion">
            <p class="nombre">${tarea.description}</p>
            <p class="timestamp">${fecha.toLocaleDateString()}</p>
          </div>
        </li>`
      }
      //Renderizo el contador a medida que va iterando
      nroTerminadas.innerText = contador;
    })
  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    const btnCambioEstado = document.querySelectorAll('.change')

    btnCambioEstado.forEach(boton => {

      boton.addEventListener('click', (event) => {
        console.log(event)
        const id = event.target.id
        const body = {}
        if(event.target.classList.contains('incompleta')){
          body.completed = false
        } else {
          body.completed = true
        }

        const settings = {
          method: 'PUT',
          body: JSON.stringify(body),
          headers: {
            'Content-Type' : 'application/json',
            Authorization: token
          }
        }
        fetch(`${url}/tasks/${id}`, settings)
        .then(res => {
          console.log(res)
          consultarTareas()
          return res.json()
        }).then(data => console.log(data))

      })

    })
      
  }

  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {
    const btnBorrarTarea = document.querySelectorAll('.borrar')

    btnBorrarTarea.forEach(boton => {
      boton.addEventListener('click', (event) => {
        const id = event.target.id
        const settings = {
            method : 'DELETE',
            headers: {
              Authorization: token
            }
        }
        fetch(`${url}/tasks/${id}`, settings)
        .then(res => {
          console.log(res)
          consultarTareas()
        })
      })
    })
  }
});




