function cambiarImagen() {
    var vid = document.getElementById('video');
    
    if (vid.src.endsWith("video1.mp4")) {
        vid.src = "video2.mp4";
    } else {
        vid.src = "video1.mp4";
    }
}