function ventanaNueva(){
    var palabras = document.getElementById("palabras").value;
    var palabrasArray = palabras.split(",");

    //Para eliminar los espacios en blanco
    palabrasArray = palabrasArray.map(function(palabra) {
        return palabra.trim();
    });

    var primeraPalabra = palabrasArray[0];
    var ultimaPalabra = palabrasArray[palabrasArray.length - 1];
    var numeroPalabras = palabrasArray.length;
    var ordenadas = palabrasArray.sort()

    var resultados = "Primera palabra: " + primeraPalabra + "<br>" +
                     "Última palabra: " + ultimaPalabra + "<br>" +
                     "Número de palabras: " + numeroPalabras + "<br>" +
                     "Palabras ordenadas: " + ordenadas.join(",");

    var resultadosWindow = window.open("", "Resultados", "width=400,height=300");
    resultadosWindow.document.write("<h2>Resultados:</h2>");
    resultadosWindow.document.write(resultados);
}