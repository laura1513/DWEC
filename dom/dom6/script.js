var imagenActual = 1;
var cantidad = 10;
function cambiarImagen() {
    var imagen = document.getElementById('imagen');
    imagenActual = (imagenActual % cantidad) + 1;
    imagen.src = "imagen" + imagenActual + ".jpeg"
}