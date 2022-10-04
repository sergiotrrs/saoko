console.log("Sesion JS05 Operadores");

//Operadores aritméticos:
// + - * / % **
let suma = 3 + 4;

console.log("Valor de suma = " + suma);

// Operadores de asignación:
let numero;
numero = 10;
numero += 10;  //numero = numero + 5;
numero -= 5   // numero = numero -5; 

numero= 12;
console.log("Valor de número = " + (numero+=3) ); //15
numero *= 2; //30
numero /= 3; //10
numero %= 2; //0
numero **= 3; //0

console.log("Valor de número = " + numero++ ); //0
console.log("Valor de número = " + ++numero ); //2

// Operadores lógicos &&, ||, !
let valorB = true && true;
valorB = true && true || !false && true && "Hola" ;

console.log("Valor booleano " + valorB);