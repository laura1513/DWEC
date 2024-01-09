var tam = 1;
var original = 1;
function modificar(event, tamanyo) {
    var e = document.getElementById('text');
    if(event === "aumentar") {
        if (tam >= 2) {
            alert("TAMAÑO MAXIMO SUPERADO");
        } else {
            tam += tamanyo;
        }
    } else if (event === "reducir") {
        if (tam < 1) {
            alert("TAMAÑO MINIMO SUPERADO");
        } else {
            tam -= tamanyo;
        }
    } else if (event === "original") {
        tam = original;
    }
    e.style.fontSize = tam + 'em';
}