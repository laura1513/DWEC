function event1(event) {
    const uno = document.getElementById('uno');
    uno.style.color = 'blue';
    console.log("Codigo ejecutado");
}
function event2(event) {
    event.preventDefault();
    const dos = document.getElementById('dos');
    alert("No funciona");
    dos.style.color = 'green';
}