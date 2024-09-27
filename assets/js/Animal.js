import Propietario from "./Propietario.js";
//clase hija de propietario
export default class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        //constructor heredado
        super(nombre, direccion, telefono);
        this._tipo = tipo;  
    }
    //getters y settes correspondientes
    get tipo() {
        return `El tipo de animal es un: ${this._tipo}`;  
    }

    set tipo(in_tipo) {
        this._tipo = in_tipo;
    }
}