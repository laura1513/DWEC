function handleInput() {
    var textoIngresado = document.getElementById('campoTexto').value;
    document.getElementById('textoGuardado').textContent = textoIngresado;
}
document.addEventListener('input', handleInput);