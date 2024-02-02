var dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
var txt = "";
var txt2 = "";
dias.forEach(muestra);
document.getElementById('txt').innerHTML = txt;
function muestra(valor, index, array) {
    txt = txt + valor + " ";
}