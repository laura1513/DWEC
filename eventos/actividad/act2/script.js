var elemento = document.getElementById("elemento");
elemento.addEventListener("wheel", cambiarTamaño);
function cambiarTamaño(event) {
    var delta = event.deltaY || event.detail || event.wheelDelta;
    if (delta > 0) {
        elemento.style.width = (parseInt(elemento.style.width) - 10) + "px";
        elemento.style.height = (parseInt(elemento.style.height) - 10) + "px";
    } else {
        elemento.style.width = (parseInt(elemento.style.width) + 10) + "px";
        elemento.style.height = (parseInt(elemento.style.height) + 10) + "px";
    }
    event.preventDefault();
}