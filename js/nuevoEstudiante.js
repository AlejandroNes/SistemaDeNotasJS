//nuevo estudiante
//importaciones
import { mostrarAlerta } from './funciones.js';
import { agregarDatos } from './API.js';

(function(){
    //variables
    const formulario = document.querySelector('#formulario')

    //eventos
    formulario.addEventListener('submit', validarFormulario);

    //funciones
    function validarFormulario(e){
        e.preventDefault();
        //obteniendo valor de los inputs
        let nombre = document.querySelector('#nombre').value;
        let examen1 = document.querySelector('#examen1').value;
        let examen2 = document.querySelector('#examen2').value;
        let examen3 = document.querySelector('#examen3').value;

        if(nombre == '' || examen1 == '' || examen2 == '' || examen3 == ''){
            mostrarAlerta('Llene todos los campos');
            return
        }
            examen1 = parseInt(examen1);
            examen2 = parseInt(examen2);
            examen3 = parseInt(examen3);
            let promedio = (examen1 * 0.30) + (examen2 * 0.30) + (examen3 * 0.40);
            promedio = promedio.toFixed(2)

            const objeto = {
            nombre,
            examen1,
            examen2,
            examen3,
            promedio
            }
            agregarDatos(objeto);
    }   
})();