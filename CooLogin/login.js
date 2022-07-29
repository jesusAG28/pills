// Añadimos un disparador de evento para que cuando el contenido de la pagina se garque, el gif de carga se oculte
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('loader').style.display = 'none';
});

// Añadimos un disparador de evento para que cuando se envie el formulario se validen los campos
document.getElementById('datos').addEventListener('submit',(event) => {

    // Prevenimos el evio de los datos (accion por defecto)
    event.preventDefault();
    
    // Recogemos los valores de los campos del formulario
    var user = document.getElementById('user').value;
    var pass = document.getElementById('password').value;

    // Inicializamos la variable mensaje como texto vacio
    var mensaje = '';

    // Comprobamos si alguno de los dos esta vacio
    if(user == '' || pass ==  ''){
        mensaje = 'Usuario o contraseña vacios.';
    }else{
        mensaje = 'Bienvenido ' + user;
    }

    // Devolvemos el mensaje
    alert(mensaje);
});