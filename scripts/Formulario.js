



console.log("si sirve el js")


function myFunction() {
    if ((document.getElementById("nombre").value == "") && (document.getElementById("apellido").value == "") && (document.getElementById("email").value == "")) {
        alert("llena todos los campos!")
    } else {
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var email = document.getElementById("email").value;
        var comentario = document.getElementById("comentario").value;
        var comm = "Informe generado con exito"
        alert(comm + ": " + nombre + ", " + apellido + ", " + email + ", " + comentario)
    }
   
    
}
