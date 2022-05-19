// QuerySelector

const heading = document.querySelector('.header__texto h2');
// heading.textContent = 'hola que talco';

//QuerySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
// enlaces[0].textContent = 'Nuevo texto para enlace';
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

// Generar un nuevo enlace

const nuevoEnlace = document.createElement('A')

//Agregar el href
nuevoEnlace.href = 'nuevo-enlance.html';
//agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';
//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');
//Agregar al documento
const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace);
console.log(nuevoEnlace);

//Eventos

// console.log(1);

// window.addEventListener('load', function() { // espera a js y archivos esten listos
// console.log(2);
// });

// window.onload = function() {
// console.log(3);
// };

// document.addEventListener('DOMContentLoaded', function(){
//     console.log(4);
// });


// console.log(5);

// window.onscroll = function(e){
//     console.log(e);
//     console.log('scrolling...')
// }

//Seleccionar elementos y asociarles eventos

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(e){
//     console.log(e);
//     e.preventDefault();



//     // validar un formulario


//     console.log('Enviando Formulario')
// });


//Eventos de los input y los textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const textarea = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// EL evento de Submit
formulario.addEventListener('submit', function(e){
    e.preventDefault();

    // Validar el formulario

    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        mostarAlerta('Todos los campos son obligatorios', 'error');

        return; //Corta la ejecucion del codigo
    }

    // Crear alerta de Enviar correctamente
    mostarAlerta('Mensaje enviado Correctamente');


    //Enviar el formulario

    console.log('Enviando Formulario')
});

function leerTexto(e) {
    // console.log('Escribiendo...');
    // console.log(e.target.value)

    datos[e.target.id] = e.target.value;

    // console.log(datos);
};

//Muestra un error en pantalla
function mostarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error) {
        alerta.classList.add('error')
    } else {
        alerta.classList.add('correcto')
    }
    formulario.appendChild(alerta)
    // Desaparesca despues de 5 segundos
    
    setTimeout(() => {
            alerta.remove()
    }, 5000);
}







