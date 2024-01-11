var w = 250;
var h = 250;
var wOrig = 250;
var hOrig = 250;
function modificar(event, tamanyo) {
    var e = document.getElementById('imagen');
    if(event === "aumentar") {
        if (w >= 400 && h >= 400) {
            alert("TAMAÑO MAXIMO SUPERADO")
        } else {
            w += tamanyo;
            h += tamanyo;
        }
    } else if (event === "reducir") {
        if (w <= 100 && h <= 100) {
            alert("TAMAÑO MINIMO SUPERADO")
        } else {
            w -= tamanyo;
            h -= tamanyo;
        }
    } else if (event === "original") {
        w = wOrig;
        h = hOrig;
    }
    e.style.width = w + 'px';
    e.style.height = h + 'px';
}