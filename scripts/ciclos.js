console.log("Sesion J04 Ciclos");

/**
 * La razón del por qué se recomiendo declarar un
 * arreglo u objeto con const, es para evitar
 * que se cambie el *tipo* de dato:
 */
let arrayLet = [1,2,3,4];
const myArray = [10,11,12];
//arrayLet = "Holi Crayoli";
myArray.push("Holi Crayoli 2"); //indice 3
myArray[myArray.length] = "Holi crayoli 3"; //índice 4
myArray[5]="xd"; //indice 5

//console.log(arrayLet);
myArray[3] = "Mel"; // Se reemplaza Holi Crayoli2

function reemplazar(myArray) {
  for (let index = 0; index < myArray.length; index++) {
    if (myArray[index] === "Holi crayoli 3") myArray[index] = "Omar";
  }
  return myArray;
}

//Rafa
function reemplazarR(myArray, stringToReplace, newString) {
    const index = myArray.indexOf(stringToReplace); // si no existe, retorna -1
    if (index>-1)myArray[index] = newString;
    return myArray;
}
console.log(reemplazarR(myArray, "xd456", "Rafa"));

//Rafa 2.0
function reemplazarOInsertar(myA, stringToReplace, newString) {
    return  myA.includes(stringToReplace) //condicon ? true : false
         ? myA[ myA.indexOf(stringToReplace) ]= newString  // myArray[i] = newData;
         : null;           
}
console.log(myArray);
console.log(reemplazarOInsertar(myArray, "Holi crayoli 3", "Rodrigo"));
console.log(myArray);
//---------------------------------------------------------------------------
/**
 * FIFO:
 *       E3   E2  E1 --->  [ arreglo  ] --->  E3   E2  E1
 * LIFO: 
 *       E3   E2  E1 --->  [ arreglo  ] --->  E1   E2  E3
 */
console.log("#####  FIFO LIFO ######")
                   //    1            2       3
const perecederos = ["manzanas", "quesos","fresas"];

//Agregamos un elemento al final del arreglo:
perecederos.push("leche"); // será mi 4o elemento 
console.log(perecederos);
//Sacamos el primer elemento del arreglo:
console.log("Elemento eliminado: "+ perecederos.shift() )
console.log(perecederos);
// LIFO
console.log("/n ------ LIFO--------");
const tienda = [...perecederos]; // Se clone el arreglo const tienda = perecederos.slice();
// const tienda = perecederos;
console.log(tienda);
//Agregamos un elemento al final del arreglo:
tienda.push("el amor"); // será mi 4o elemento 
console.log(tienda);
//Sacamos el último elemento en entrar
console.log("Elemento eliminado: " + tienda.pop());
console.log(tienda);
//--------------------------------------------------------
console.log("##### Duplicar un arreglo ######");
//Modificar el arreglo
// [2,4,5,6]; x 2 = [4,8,10,12]

const arrayNumbers = [1, 2, 3, 4, 5];

   function duplicar (array1){
     let total = [...array1];
     for (let i=0; i<array1.length; i++){
        //array1[i]*= 2; // array1[i] = array1[i] * 2;
        //total.push(array1[i] * 2);
        total[i]*=2;
     }
       return total;
   }

   const duplicated = arrayNumbers.map(num => num * 2);

console.log("original " + arrayNumbers);
console.log(duplicar (arrayNumbers));
console.log(duplicated);

//--------------------------------------------------------
console.log("\n ##### Calcular el factorial de un número ######");
let m=5;
function factorial(numero){
    let total=1;
    for (let i = 1; i <= numero; i++) {
        total = total * i; ;        
    }
    return total;
}
// Se realiza con una recursión de la función.
function factorialOmar(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function factorialVictor(n){
    return n === 1  ? 1 : n * factorialVictor(n - 1);
}


console.log(factorial(m));
console.log(factorialOmar(m));
console.log(factorialVictor(m));
//--------------------------------------------------------
console.log('\n ##### De la palabra "Pepe Pecas Pica Papas" saber cuantas "e"(3) tiene ######');
function countE(word) {
    const arrayOfChar = word.split("")
    const arrayOfLetterE =  arrayOfChar.filter((char) => char === "e")
    return arrayOfLetterE.length
  }
console.log(countE("Pepe Pecas Pica Papas pero"));

console.log(Array.from(`pepe pecas pica papas pero`).map(element=> (element == "e") * 1 ).reduce((a,b)=>a+b));

const getHowManyCharacters = (str, ch) => str.split("").filter(e => e === ch).length

console.log(getHowManyCharacters("Pepe Pecas Pica Papas pero", "e"))

const buscarCaracter = (cadena, caracter) => cadena.split(caracter).length-1;

console.log(buscarCaracter("Pepe Pecas Pica Papas pero", "e"));
