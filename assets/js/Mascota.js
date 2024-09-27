import Animal from "./Animal.js";
//clase hija de animal
export default class Mascota extends Animal{
    constructor (nombre, direccion, telefono, tipo, nombreMascota, enfermedad){
        //constructor heredado de animal
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;				
    }
    //getters y setters correspondientes
    get nombreMascota() {
        return this._nombreMascota;
    }
    set nombreMascota(in_nombreMascota) {
        this._nombreMascota = in_nombreMascota;
    }
    
    get enfermedad() {
        return this._enfermedad;
    }
    set enfermedad(in_enfermedad) {
        this._enfermedad = in_enfermedad;
    }
}

