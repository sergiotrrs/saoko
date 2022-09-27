console.log("Sesión JS03 Condicionales");

//++++++++++Declaración de bloque +++++++++++++
let nombre =  "Rafa";
let ciudad = "Guadalajara";

{
    const listado = ["Olivia", "Benja", "Luis", "Linda"];
    let nombre =  "Fer";
    let ciudad = "CDmx";
    let apellido = "Palapa";
    console.log(`Mi nombre es ${nombre} ${apellido}, vive en ${ciudad}`); // Fer CDmx

}

console.log(`Participante: ${nombre}, que vive en ${ciudad}`); // Rafa GDL

//++++++++++++++++++ Condicional IF +++++++++++++++++++++++++++++
/**
 *    Sintaxis:
 *          if( condicionVerdadera ) instrucción;
 * 
 *          if( condicionVerdadera ) {
 *               instrucciones;
 *            }              
 */

let edad = 25;

console.log("*** Declaración antes del if ---->");

if ( edad > 24 ) console.log("La edad es mayor a 25");
else {
    console.log("La edad es menor a 25");
}

console.log("<---- Declaración después del if ***");

//++++++++++++++++++ Operador ternario +++++++++++++++++++++++++
// sintaxis:    condición ? condición_verdadera : condicion_falsa;

console.log (`La edad es ${ edad>24 ? "mayor":"menor"} a 25`) ;
let comparacion = edad===25 ? "es igual": edad>24 ? "mayor":"menor";
console.log (`La edad es ${ comparacion } a 25`) ;

//console.log (`La edad es ${ edad===25 ? "es igual": edad>24 ? "mayor":"menor" } a 25`) ;

//***************** Conicional if, else if, else ****************/
/**
 *    Sintaxis:
 *          if( condicionVerdadera ) {
 *               instrucciones;
 *            }
 *          else if (OtraCondicion) {
 *            }
 * *        else if (OtraCondicion) {
 *            }
 *          else {
 *              Instrucciones;
 *            }              
 */
console.log("===== Uso de if, else if, else=======");
edad = 25;

if (edad > 25) {
  console.log("La edad es mayor a 25");
} else if (edad === 25) {
  console.log("La edad es 25");
} else console.log("La edad es menor a 25");

console.log (`La edad es ${ edad===25 ? "es igual": edad>24 ? "mayor":"menor" } a 25`);

if (edad === 25) comparacion = "igual";
else if (edad > 24) comparacion = "mayor";
else comparacion = "menor";

console.log (`(claru) La edad es ${ comparacion } a 25`);

//++++++++++++++++++ Condicional switch +++++++++++++++++++++++++
/**
 * Sintaxis:
 *        switch(expresion){
 *            case valor1:
 *                  instrucciones;
 *                  break;
 *            case valor2:
 *                  instrucciones;
 *                  break;
 *            case valor3:
 *                  instrucciones;
 *                  break;
 *           defaul:
 *                  instrucciones;
 *       }
 */
edad = 26;
comparacion="";
// Las edades serán desde 24 a 28
switch (edad){
    case 25:
        comparacion= "es igual";
        break;
    case 24:
        comparacion= "es menor";
        break;
    case 26:case 27:case 28:
        comparacion= "es mayor";
        break;
    default:
        comparacion="*No se puede saber*";
}

console.log (`(switch) La edad es ${ comparacion } a 25`);


let valor = Math.sign(25 - edad);
switch (valor) {
    case -1:
        comparacion = "mayor";
        break; 
    case 1:
        comparacion = "menor";
        break;
    case 0:
        comparacion = "igual";
        break;
}

console.log(`La edad es ${comparacion} a 25.`);

let numeroMes = 12;
let estacion = "", mes = "";

switch (numeroMes) {
  case 12:
    mes = "Diciembre";
    estacion = "Invierno";
    break;
  case 1:
    mes = "Enero";
    estacion = "Invierno";
    break;
  case 2:
    mes = "Febrero";
    estacion = "Invierno";
    break;
  case 3:
    mes = "Marzo";
    estacion = "Primavera";
    break;
  case 4:
    mes = "Abril";
    estacion = "Primavera";
    break;
  case 5:
    mes = "Mayo";
    estacion = "Primavera";
    break;
  case 6:
    mes = "Junio";
    estacion = "Verano";
    break;
  case 7:
    mes = "Julio";
    estacion = "Verano";
    break;
  case 8:
    mes = "Agosto";
    estacion = "Verano";
    break;
  case 9:
    mes = "Septiembre";
    estacion = "Otoño";
    break;
  case 10:
    mes = "Octubre";
    estacion = "Otoño";
    break;
  case 11:
    mes = "Noviembre";
    estacion = "Otoño";
    break;
}

console.log("El mes de " + mes + " se encuentra en la estación " + estacion);

numeroMes = 12;
estacion = "";
mes = "";

if (numeroMes === 12 || numeroMes === 1 || numeroMes === 2) {
    estacion = "Invierno";
    if (numeroMes === 12) mes = "Diciembre";
    else if (numeroMes === 1) mes = "Enero";
    else mes = "Febrero";
  }
  else if (numeroMes >= 3 && numeroMes <= 5) {
    estacion = "Primavera";
    if (numeroMes === 3) mes = "Marzo";
    else if (numeroMes === 4) mes = "Abril";
    else mes = "Mayo";
  }
  else if (numeroMes >= 6 && numeroMes <= 8) {
    estacion = "Verano";
    if (numeroMes === 6) mes = "Junio";
    else if (numeroMes === 7) mes = "Julio";
    else mes = "Agosto";
  }
  else if (numeroMes >= 9 && numeroMes <= 11) {
    estacion = "Otoño";
    if (numeroMes === 9) mes = "Septiembre";
    else if (numeroMes === 10) mes = "Octubre";
    else mes = "Noviembre";
  }
  else {
    estacion = "No se encontro";
    mes = "No se encontro";
  }
  console.log("(Alan)El mes de " + mes + " se encuentra en la estación " + estacion);

let online = true;
let active = true;
/* if(online) {
  if (active) {
    console.log('James')
  }
}
 */
online && active && console.log('James')



