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
    fetch(`${url}/users/getMe`, {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json',
        Authorization: token
      }
    }).then(res => res.json())
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
        'Content-Type' : 'application/json',
        Authorization: token
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))



  };


  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener('submit', function (event) {
    




  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {







  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    
    



  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {
   
    

    

  };

});