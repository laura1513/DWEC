var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
boton1.addEventListener("click", function() {
    mostrarMensaje("Hola mundo");
});
boton2.addEventListener("click", function() {
    mostrarMensaje("Hola otra vez");
});
function mostrarMensaje(mensaje) {
    alert(mensaje);
}