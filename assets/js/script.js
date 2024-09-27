//importar la clase mascota
import Mascota from "./Mascota.js";
document.addEventListener('DOMContentLoaded', function(){
    let form = document.querySelector('form');
    form.addEventListener('submit', function(event){
        event.preventDefault();
        //crear variables
        let propietario = document.getElementById('propietario').value;
        let telefono  = document.getElementById('telefono').value;
        let direccion = document.getElementById('direccion').value;
        let nombreMascota =document.getElementById('nombreMascota').value ;
        let tipo= document.getElementById('tipo').value;
        let consulta= document.getElementById('enfermedad').value; 
        //instancia el objeto mascota
        let mascota1 = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, consulta);
        //crear la infirmacion de la mascota
        let infomascota = `${mascota1.tipo}, mientras que el nombre de la mascota es ${mascota1.nombreMascota}
                            y la enfermedad es ${mascota1.enfermedad}`;
        //para almacenar la informacion dentro de la lista 
        const ulElemento = document.querySelector('#resultado ul');
        if (ulElemento) {
            let item = [mascota1._datosPropietario(), infomascota];
            // Recorre el arreglo anterior para crear los li correspondientes en resultado
            item.forEach(items => {
                let li = document.createElement('li');
                li.textContent = items;
                ulElemento.appendChild(li);
            });
        } else {
            console.error('Elemento no encontrado');
        }
    });
});
