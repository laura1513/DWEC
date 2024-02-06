var time = new Date();
var txt = document.getElementById('hora');
var hora = time.getHours();
if (hora < 12 && hora > 6) {
    alert("Buenos días");
} else if (hora > 19 && hora <= 6) {
    alert("Buenas noches");
} else {
    alert("Buenas tardes");
}