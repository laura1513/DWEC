var imagenElement = document.getElementById("imagen");
var imagenIndex = 1;
var totalImagenes = 3;
document.addEventListener("keydown", cambiarImagen);
function cambiarImagen(event) {
    if (event.keyCode === 13) {
        imagenIndex = (imagenIndex % totalImagenes) + 1;
        imagenElement.src = "imagen" + imagenIndex + ".jpg";
    }
}