// sintaxis de IF: if (condiciòn) { caso 1} else {caso 2}
function checkLongitud(longitud) {
  if (longitud === "") {
    return "Debe ingresar longitud";
  } else if (longitud < 3) {
    return "La longitud debe ser mayor o igual a 3";
  } else if (typeof longitud !== "string") {
    console.log(typeof longitud);
    return "La longitud recibida no es válida";
  } else if (longitud > 10) {
    return "La longitud debe ser menor o igual a 10";
  } else {
    console.log(longitud, longitud.length);
    return longitud;
  }

  /* TU CODIGO */
}

function generarContrasena(
  longitud,
  incluirEspeciales,
  incluirNumeros,
  incluirMayusculas
) {
  /* TU CODIGO */
  var letras = "abcdefghijkmnñlopqrstuvwxyz";

  var numeros = "123456789";

  var especiales = "$%^<.>/&*(!@#|;:'\",)-_=+[{]}?";

  var letrasMayusculas = letras.toUpperCase();

  var caracteresDisponibles = letras;

  if (incluirEspeciales)
    caracteresDisponibles = caracteresDisponibles + especiales;
  if (incluirNumeros) caracteresDisponibles = caracteresDisponibles + numeros;
  if (incluirMayusculas)
    caracteresDisponibles = caracteresDisponibles + letrasMayusculas;

  var contrasena = "";

  for (var i = 1; contrasena.length < longitud; i++) {
    if (longitud >= 3) {
      var numeroAleatorio = Math.random() * caracteresDisponibles.length;
      var numeroEntero = Math.round(numeroAleatorio);
      var caracter = caracteresDisponibles.charAt(numeroEntero);
      contrasena = contrasena + caracter;
    }
  }

  return "Contrasena Generada: " + contrasena;
}

generarContrasena();

// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
};
