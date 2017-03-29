window.onload = function (){
    var nombre = document.getElementById("nombre-coder");
    var apellido = document.getElementById("apellido-coder");
    var correo = document.getElementById("correo-coder");
    var pass = document.getElementById("pass-coder");

    var objetoCoder = JSON.parse(localStorage.getItem("nueva-coder"));

    nombre.innerHTML = objetoCoder.nombre;
    apellido.innerHTML = objetoCoder.apellido;
    edad.innerHTML = objetoCoder.edad;
    genero.innerHTML = objetoCoder.genero;
    ciudad.innerHTML = objetoCoder.ciudad;
    pais.innerHTML = objetoCoder.pais;

}