/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) { // Recibo nombre o apellido
    return texto.length >= 3
}

function normalizarTexto(texto) {
    return texto.trim().toLowerCase()
}

/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return emailRegex.test(email)
}

function normalizarEmail(email) {
    return email.toLowerCase().trim()
}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {
    return contrasenia.length >= 6
}

function compararContrasenias(contrasenia_1, contrasenia_2) {
    return contrasenia_1 === contrasenia_2
}


