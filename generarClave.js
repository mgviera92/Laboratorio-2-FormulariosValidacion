//Declaracion de variables
var frmClave = document.querySelector("#frmClave");
var nombre = document.querySelector("#nombre");
var apellido = document.querySelector("#apellido");
var dni = document.querySelector("#dni");
var fecha = document.querySelector("#fecha");
var btnEnviar = document.querySelector("btnEnviar");
var respuesta = document.querySelector("respuesta");

var expRegNombre = /^([A-Z][a-zñáéíóú]+[\s]*)+$/;

function generarClave(evento){

var clave = nombre.value.substring(0,3);
clave += apellido.value.substring(0,2);
clave += dni.value;
clave += fecha.value.substring(8);
clave += fecha.value.substring(3,5);
clave += fecha.value.substring(0,2);

respuesta.innerHTML = "Tu clave es: "+clave.toUpperCase();

    evento.preventDefault();
    alert("Enviando Formulario");

}
function validacionCampos(evento){
    var expRegNombre = /^([A-Z][a-zñáéíóú]+[\s]*)+$/;
        // expRegEmail = /^([\W]._-@[\W]_-.a-z[2,4].a-z[2])+$/;
    var quedato = evento.target;

if(quedato.id == "nombre" || quedato.id == "apellido"){

    if(!expRegNombre.exec(quedato.value))
        {
        alert("El campo nombre, solo acepta letras y espacios en blanco")
        setTimeout(function(){
            quedato.focus();
        },100);

        }
    }
}

function cargaDocumento(){
    nombre.addEventListener("blur",validacionCampos);
    apellido.addEventListener("blur",validacionCampos);
    dni.addEventListener("blur",validacionCampos);
    fecha.addEventListener("blur",validacionCampos);

    frmClave.addEventListener("submit", generarClave);
}


//Delegacion-asignacion de Eventos

window.addEventListener("load", cargaDocumento);