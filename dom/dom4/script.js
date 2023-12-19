function cambiarImagen() {
    var imagen = document.getElementById('imagen');
    
    if (imagen.src.endsWith("casauno.jpeg")) {
        imagen.src = "casados.jpeg";
    } else {
        imagen.src = "casauno.jpeg";
    }
}