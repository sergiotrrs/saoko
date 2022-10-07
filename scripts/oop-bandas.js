console.log("JS08 Un día triste como todos los demás");

const elRecodo = new Banda("El recodo", 50, "México");
console.log(elRecodo.imprimir() );

const mS = new Banda("MS", 200, "México");
console.log(mS.imprimir());

const pXNDX = new Banda("PXNDX", 4, "México");
console.log(pXNDX.imprimir());
//------Verificar la fecha de creación---------
console.log(`Fecha de creación de ${elRecodo.nombre} fue el ${elRecodo.creacion}`);
console.log(`Fecha de creación de ${pXNDX.nombre} fue el ${pXNDX.creacion}`);
/* pXNDX.creacion = "sepa tú";
pXNDX.nuevoAtributo = "Nuevos datos";
console.log(`Fecha de creación de ${pXNDX.nombre} fue el ${pXNDX.creacion}`); */

elRecodo.nParticipantes += 1; // elRecodo.nParticipantes = elRecodo.nParticipantes +1
console.log(elRecodo.imprimir());

