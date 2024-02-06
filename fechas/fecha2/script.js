var hora = new Date();
var txt = document.getElementById('hora');
txt.innerHTML = hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds();