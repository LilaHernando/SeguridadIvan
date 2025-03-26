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
    return longitud, longitud.length;
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

  var letrasMayusculas = letrasMinusculas.toUpperCase();

  var caracteresDisponibles = letras;

  // var longitud = letas + numeros + especiales + letrasMayusculas;

  if (incluirEspeciales)
    caracteresDisponibles = caracteresDisponibles + especiales;
  if (incluirNumeros) caracteresDisponibles = caracteresDisponibles + numeros;
  if (incluirMayusculas)
    caracteresDisponibles = caracteresDisponibles + letrasMayusculas;

  var contraseña = "";

  if (longitud >= 3) {
    var numeroAleatorio = Math.random() * caracteresDisponibles.length;
    var numeroEntero = Math.ceil(numeroAleatorio);
    var caracter = caracteresDisponibles.charAt(numeroEntero);
    contraseña = contraseña + caracter;

    var numeroAleatorio = Math.random() * caracteresDisponibles.length;
    var numeroEntero = Math.ceil(numeroAleatorio);
    var caracter = caracteresDisponibles.charAt(numeroEntero);
    contraseña = contraseña + caracter;

    var numeroAleatorio = Math.random() * caracteresDisponibles.length;
    var numeroEntero = Math.ceil(numeroAleatorio);
    var caracter = caracteresDisponibles.charAt(numeroEntero);
    contraseña = contraseña + caracter;
  }

  return "Contraseña Generada:" + contraseña;
}

generarContrasena();

// <------- NO TOCAR -------->
module.exports = {
  checkLongitud,
  generarContrasena,
};
