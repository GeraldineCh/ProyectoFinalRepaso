window.onload = function (){
    var nombre = document.getElementById("nombre-coder");
    var apellido = document.getElementById("apellido-coder");
    var correo = document.getElementById("correo-coder");
    var pass = document.getElementById("pass-coder");

    var objetoCoder = JSON.parse(localStorage.getItem("nuevo-clase"));

    nombre.innerHTML = objetoCoder.nombre;
    apellido.innerHTML = objetoCoder.apellido;
    correo.innerHTML = objetoCoder.correo;
    pass.innerHTML = objetoCoder.pass;


}