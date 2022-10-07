
class Banda {
    // Se definen los atributos
   #creacion;
   #nombre;
   #nParticipantes;
   #pais;

    constructor(nombre, nParticipantes, pais ){
        this.#nombre = nombre;
        this.#nParticipantes  = nParticipantes;
        this.#pais = pais;
        this.#creacion= new Date();        
    }
    /**
     * Texto con los datos principales de la banda
     * @returns mensaje con datos principales.
     */
    imprimir(){
        return `Grupo: ${this.#nombre} de ${this.#nParticipantes} integrantes, del país ${this.#pais}`
    }

    get creacion (){
        return this.#creacion;
    }

    get nParticipantes(){
        return this.#nParticipantes;
    }

    set nParticipantes(nuevoNumero){
        this.#nParticipantes = nuevoNumero;
    }
}