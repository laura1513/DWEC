function mostrar() {
    var n = document.getElementById('name').value;
    alert("Hola autor" + n);
}
document.getElementById('boton').onclick = mostrar;