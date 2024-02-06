document.addEventListener("DOMContentLoaded", function() {
    dibujarRombo(7); // Puedes cambiar el número de filas aquí
});

function dibujarRombo(filas) {
    let rombo = "";
    let mitad = Math.ceil(filas / 2);
    
    for (let i = 0; i < mitad; i++) {
        for (let j = 0; j < mitad - i - 1; j++) {
            rombo += "&nbsp;";
        }
        rombo += "*";
        for (let k = 0; k < 2 * i - 1; k++) {
            rombo += "&nbsp;";
        }
        if (i !== 0) {
            rombo += "*";
        }
        rombo += "<br>";
    }

    for (let i = mitad - 2; i >= 0; i--) {
        for (let j = 0; j < mitad - i - 1; j++) {
            rombo += "&nbsp;";
        }
        rombo += "*";
        for (let k = 0; k < 2 * i - 1; k++) {
            rombo += "&nbsp;";
        }
        if (i !== 0) {
            rombo += "*";
        }
        rombo += "<br>";
    }
    
    document.getElementById("rombo").innerHTML = rombo;
}