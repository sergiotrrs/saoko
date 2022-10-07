
class Music {
    /**
     * Datos de inicio
     * @param {*} name nombre disco
     * @param {*} duration duración disco
     */
    constructor (name, duration){
        this.name = name;
        this.duration = 100;
    }

    allData (){
        console.log(`El nombre ${this.name} la duración ${this.duration}`);
    }

}

export {Music};
