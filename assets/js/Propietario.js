//clase padre
export default class Propietario {
    constructor(nombre, direccion, telefono){
		//atrivutos
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
	//getters y settes
    get nombre() {
		return this._nombre;
	}
	set nombre(in_nombre) {
		this._nombre = in_nombre;
	}
					
	get direccion() {
		return this._direccion;
	}
	set direccion(in_direccion) {
		this._direccion = in_direccion;
	}
					
	get telefono() {
		return this._telefono;
	}
	set telefono(in_telefono) {
		this._telefono = in_telefono;
	}
	_datosPropietario(){
		let datos = `El nombre del dueño es: ${this._nombre} El domicilio es: ${this._direccion}
						y el número de teléfono es: ${this._telefono}`;
		return datos;
	}
}
