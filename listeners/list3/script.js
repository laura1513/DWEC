function handleInputChange() {
    var inputValue = document.getElementById('miInput').value;
    console.log('Nuevo valor del input:', inputValue);
}
document.addEventListener('input', handleInputChange);