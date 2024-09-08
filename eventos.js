document.getElementById("mi-div").addEventListener("click", function() {
    alert("Hola! Soy el div");
});

// Manejador del botón para evitar la propagación del evento
const boton = document.querySelector("button");
boton.addEventListener("click", function(event) {
    event.stopPropagation(); // Evita que el evento se propague al div
    alert("Hola! Soy el botón");
});
