console.log("Sesión JS02 funciones");

//++++++++++ Función declarada ++++++++++++++++++++++
//llamado de la función declarada.
console.log("Multiplica 5 * 6 = " + multiplica(5,6))

/**
 * Este es un ejemplo de una función declarada 
 * (function declaration, function statement).
 * Una característica de las funciones declaradas
 * es que tiene un hoisting (elevación).
 * 
 * Realiza la multiplicación de 2 números
 * @param {Number} a multiplicando 1
 * @param {Number} b multiplicando 2
 * @returns resultado de la multiplicación de a*b
 */
function multiplica( a, b){
    return a*b;
}

//++++++++++ Función expresada ++++++++++++++++++++++
/**
 * Las funciones expresada (function expressions)
 *  son declaradas dentro de la asignación de una variable.
 * 
 * Estas funciones pueden ser anónimas (no tener nombre).
 * Las funciones expresadas no tiene hoisting.
 */

/**
 * Sumatoria de 2 números
 * @param {Number} a 
 * @param {Number} b 
 * @returns resultado de a+b
 */
 const suma = function ( a, b) { return a +b;}

console.log("El resultado de 56 + 4 = " + suma(56, 4) );

//++++++++++ Función autoinvocadas +++++++++++++++++++

/**
 * Las funciones autoinvocadas (self-invoking functions)
 * Pueden ser anónimas y se autoejecutan() en su declaración (function)().
 */
(function (){
    console.log("====================");
    console.log("Hola crayoli");
    console.log("====================");
})();

//++++++++++ Función flecha +++++++++++++++++++

/**
 * Las funciones flecha (arrow functions) funciones similar a las
 * funciones declaradas, pero no requieren la
 * palabra "function" y si tienen una solo instrucción
 * y es el retorno, no requiere la instrucción "return".
 */

/**
 * Realiza la operación de 2 números
 * @param {Number} a 
 * @param {Number} b 
 * @returns La resta de a-b
 */
 const resta = (a, b) => a-b;

console.log("La resta de 10-5 = " + resta(10,5));

//++++++++++ Parámetros default +++++++++++++++++++
/***
 * Función con parámetros inicializados
 */
function divide(a,b=0){
    return a/b;
}

console.log("La división de a/b = " + divide(4));

//++++++++++ Funciones recursivas ++++++++++++++++

function factorial(num){
    if(num<=0) return 1;
    return (num* factorial(num-1));    
}

console.log("Factorial de 4 = " + factorial(4));

////++++++++++ Rest Parameters +++++++++++++++++++

// parameters => operation; 
// (param1, param2) => {

//return data
//};

function sum( a, b, ...resto){
    let suma = a+b;
    resto.forEach( dato => {suma+= dato;});
    return suma;
}

console.log("El resultado de sumar varios números es: " + sum(2,3,5,1));