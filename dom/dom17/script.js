var datos = ["Laura", "DAM", "12345678A", "15-01-2003"];
function mostrar() {
    for (var d of datos) {
        document.getElementById('data').innerHTML += d + "<br>";
    }
}