const formulario = document.getElementById("formCotizacion");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const contacto = document.getElementById("contacto").value.trim();
    const fecha = document.getElementById("fecha").value;
    const personas = document.getElementById("personas").value;
    const comentarios = document.getElementById("comentarios").value.trim();

    mensaje.innerHTML = "";
    mensaje.className = "";

    if(nombre === ""){
        mostrarError("Debe ingresar el nombre completo.");
        return;
    }

    if(contacto === ""){
        mostrarError("Debe ingresar un contacto.");
        return;
    }

    const formatoContacto = /^[^\s@]+@[^\s@]+\.[^\s@]+$|^[0-9]{8}$/;

    if(!formatoContacto.test(contacto)){
        mostrarError("Ingrese un correo electrónico o teléfono válido.");
        return;
    }

    if(fecha === ""){
        mostrarError("Debe seleccionar una fecha.");
        return;
    }

    const fechaActual = new Date();
    fechaActual.setHours(0,0,0,0);

    const fechaReserva = new Date(fecha);

    if(fechaReserva < fechaActual){
        mostrarError("La fecha no puede ser anterior a la fecha actual.");
        return;
    }

    if(personas === "" || personas <= 0){
        mostrarError("La cantidad de equipos debe ser mayor a cero.");
        return;
    }

    if(comentarios === ""){
        mostrarError("Debe describir el problema.");
        return;
    }

    mensaje.classList.add("exito");

    mensaje.innerHTML =
    `
    <h3>Solicitud enviada correctamente</h3>

    <p><strong>Nombre:</strong> ${nombre}</p>

    <p><strong>Contacto:</strong> ${contacto}</p>

    <p><strong>Fecha:</strong> ${fecha}</p>

    <p><strong>Cantidad de Equipos:</strong> ${personas}</p>

    <p><strong>Descripción:</strong> ${comentarios}</p>
    `;

    formulario.reset();
});

function mostrarError(texto){

    mensaje.classList.add("error");
    mensaje.innerHTML = texto;

}