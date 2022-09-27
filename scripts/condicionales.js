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
console.log (`La edad es ${ edad===25 ? "es igual": (edad>24 ? "mayor":"menor") } a 25`) ;





