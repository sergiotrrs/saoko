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

/* 'Pepe Pecas Pica Papas Pero'
    .split("")
    .filter( elemento => elemento ==='p' || elemento==='P')
    .length; */
//##################################################################################
console.log("\n #####  Ciclo For #####")
/**
 * Sintaxis de ciclo for
 *  for (inicio; condición; expresiónFinal ) {
 *       instrucciones;
 * }
 */

for (let i=0; i<10; ++i)
  console.log("El valor de la iteración es: " + i);
  //console.log("El valor de la iteración *1 = " + (i*2) );

  // A) se imprime el valor de i y el doble 
  // B) se produce un error (respuesta: por el scope de la variable)
  // C) se imprime la iteración 10 veces y el doble de i una sola vez

console.log("\n#####  For con continue y break ##### ");
/**
 *  La instrucción Break, rompe el ciclo for, no importa el n. de iteración en la que se encuentre.
 *  La instrucción Continue, interrumpe la iteración en curso y continúa a la sig. iteración.
 */
let ch18 = ["Abelardo", "Audery", "Angel", "Sharon", "Bren", "Pato Lucas", "Victor", "Alex"];
/* 
for (let i=0; i< ch18.length ; i++){
  if (ch18[i] === "Pato Lucas"){
    console.warn("Atención, esta persona no pertenece a la CH18:" + ch18[i] );
    break;
  }
  console.log("Persona de Ch18: " + ch18[i]);
} */

for (let i=0; i< ch18.length ; i++){
  if( ch18[i] !== "Pato Lucas") {
    continue;
  }
  console.warn("Atención, esta persona no pertenece a la CH18:" + ch18[i] );

}

console.log("\n#####  Matrices ##### ");

//const generation = [ [] , [] , [] ];
const generation = [ 
  ["Abelardo" , "Audery" , "Angel"  , "Sharon"   , "Bren", "El bromas", "Victor", "Alex"] , 
  ["Yosceline", "Mariana", "Karen"  , "Pedro"]   , 
  ["Emiliano" , "Jonathn", "Esteban", "El bromas" , "José"]
];

//console.log("Próxima presentación :" +  generation[1][2]); //ESto apunta a Karen

//Itear todos los elementos del arreglo:
/* for(let i=0; i<generation.length;i++){
  console.log(`Los integrantes de la corte ${i+1} son: `)
  for(let j=0; j<generation[i].length;j++){
      console.log(generation[i][j]);
  }
} */

// Detectar a "El Bromas" e indicar con una alerta la cohorte donde se encuentra.
continua_buscando:
for (let i = 0; i < generation.length; i++) {
  for (let j = 0; j < generation[i].length; j++) {
    if(generation[i][j] === 'El bromas'){
      console.warn(`El bromas se encuentra en la corte ${i} en la posicion ${j} `);
      //continue continua_buscando;
      break continua_buscando;
    }
    console.log(`Número de iteración ${i}-${j} `);
  }
}

//################# Ciclo While ################
console.log("\n#####  Cicho While ##### ");
/**
 * Sintaxis:
 *        while (condición) {
 *            instrucción;
 *        }
 */
//Encontrar un número que pensé, del 1 al 10;
/* let findNumber= true;
let number = 1;
while( findNumber){
  number++;
  if (confirm(`¿El número es ${number}?`) ){
    findNumber= false ;
    alert (`Fantástico, tu número es el ${number}`)
  } 
  else if( number>10) { 
    findNumber= false ;
    alert (`Humano, ya vete, no sbes jugar`);
  }  
} */
/* let number = 1;
while (confirm(`¿Tu número es diferente de ${number}?`)) {
  number++;
  if (number > 10) {
    alert(`Humano, ya vete, no sabes jugar`);
    break;
  }
}
alert (`Fantástico, tu número es el ${number}`); */

/**
 * Sintaxis do-while
 *   do{
 * 
 * } while( condicion );
 * 
 */
let bandera = false;

while( bandera){
  console.log("Mensaje dentro del ciclo while");
}
//-----------------------------------------------
// Muchas instrucciones
//-------------------------------------------------
let contador=0;
do {
  console.log("Mensaje dentro del do-while")  

} while( ++contador<10  );

//¿Cuántas veces se imprime? R: 10
contador = 3;
while( ++contador<10){
  console.log("Valor de contador :" + contador);
}
console.log("Valor final de contador =" + contador);
//¿ Cuantas veces se imprime en consola y cuál es el valor final de contador?  7 y 11
//¿ Con preincremento?  6 y 10