window.addEventListener ('load',function(){
      var registro = document.getElementById('datos');

      function NuevaCoder(nombre,apellido,correo,pass){
          this.nombre = nombre;
          this.apellido = apellido;
          this.correo = correo;
          this.pass = pass;
          this.coder= function (){
              return ("<br>Nombre: " + this.nombre +
                      "<br>Apellido: " + this.apellido +
                      "<br>Correo: " + this.correo +
                      "<br>Contraseña: " + this.pass);
          }
      }

      var clase = [];

      var nombre = document.getElementById('name');
      var apellido = document.getElementById('ap');
      var correo = document.getElementById('correo');
      var pass = document.getElementById('palabra');

      registro.addEventListener('click',function(evento){
          evento.preventDefault();
          if(nombre.value.length != 0 && apellido.value.length != 0 && correo.value.length != 0 && pass.value.length != 0){
                var ingreso = new NuevaCoder(nombre.value, apellido.value, correo.value, pass.value);
                localStorage.setItem("nuevo-clase",JSON.stringify(ingreso));
                window.location = "index3.html";
                document.getElementById("registro").reset()

          } else {
                var indicaciones = document.getElementById("mensaje");
                indicaciones.innerText = "Todos los campos deben ser llenados";
          }
      });
  });

  var Letras = function (evento){
      var name = evento.keyCode;
      console.log (name);
      if ((name >= 65  && name <= 90) || (name >= 97 && name <= 122) || name == 32 ){
          return true;
      } else {
          return false;
      }
  }

  name.onkeypress = Letras;
  ap.onkeypress = Letras;

  var mail = function validarEmail(e) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(e) )
        return true;
      else {
          return false;
      }
}
    correo.onkeypress = mail;

  var Cantidad = function(evento){
      var name = evento.keyCode;
      var longitud = this.value.length
      if((name >= 65  && name <= 90) || (name >= 97 && name <= 122) || name == 32 && (longitud>5 && longitud<21)){
          return true;
      } else {
          return false;
      }
  }

  palabra.onkeypress = Cantidad;

  var inputs = document.getElementsByClassName("entrada");
  var validaciones = function(){
      if (this.getAttribute("type")=="text"){
          var datos = this.value.split(" ");
          var datosMayusculas = "";
          for (var i = 0; i < datos.length; i++) {
              datosMayusculas += datos[i].charAt(0).toUpperCase() + datos[i].substring(1).toLowerCase() + " ";
          }
          this.value = datosMayusculas
      }
  }

  for (var i = 0; i < inputs.length; i++){
      inputs[i].onblur = validaciones;
  }
