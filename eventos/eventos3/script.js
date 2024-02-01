function cambiar() {
    const txt = document.getElementById("text").value;
    txt.style.color = 'blue';
}
document.getElementById("boton").onclick = cambiar;