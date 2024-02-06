document.addEventListener("DOMContentLoaded", function() {
    dibujarRombo(7); // Puedes cambiar el número de filas aquí
});

function dibujarRombo(filas) {
    let rombo = "";
    let mitad = Math.ceil(filas / 2);
    
    // Dibujar la parte superior del rombo
    for (let i = 0; i < mitad; i++) {
        for (let j = 0; j < mitad - i - 1; j++) {
            rombo += "&nbsp;";
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            rombo += "*";
        }
        rombo += "<br>";
    }
    
    // Dibujar la parte inferior del rombo
    for (let i = mitad - 2; i >= 0; i--) {
        for (let j = 0; j < mitad - i - 1; j++) {
            rombo += "&nbsp;";
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            rombo += "*";
        }
        rombo += "<br>";
    }
    
    document.getElementById("rombo").innerHTML = rombo;
}