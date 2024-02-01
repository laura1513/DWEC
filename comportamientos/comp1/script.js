function event1(event) {
    console.log("Codigo ejecutado");
}
function event2(event) {
    event.preventDefault();
    alert("No funciona");
}