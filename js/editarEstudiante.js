//editar estudiantes
//imports

import { mostrarDatosEstudiante, editarDatos } from "./API.js";
import { mostrarAlerta } from "./funciones.js";

(function(){
    //variables
    //obteniendo valor de los inputs
    const formulario = document.querySelector('#formulario');
    const nombreInput = document.querySelector('#nombre');
    const examen1Input = document.querySelector('#examen1');
    const examen2Input = document.querySelector('#examen2');
    const examen3Input = document.querySelector('#examen3');
    const idInput = document.querySelector('#id');

    //eventos
    document.addEventListener('DOMContentLoaded', editar);
    formulario.addEventListener('submit', validarForm);
    //funciones
    async function editar(){
        //id del documento editar
        const parametrosURL = new URLSearchParams(window.location.search);
        const clienteID = parseInt(parametrosURL.get("id"));
        console.log(clienteID)
        //mostrar datos del estudiante seleccionado
        const estudiante =  await mostrarDatosEstudiante(clienteID);
        console.log(estudiante)
        //funcion mostrar datos en el formulario
        mostrarFormulario(estudiante);
        
    }
    function mostrarFormulario(estudiante){
        //mostando en el formulario
        const {nombre, examen1, examen2, examen3, promedio, id} = estudiante
        nombreInput.value = nombre;
        examen1Input.value = examen1;
        examen2Input.value = examen2;
        examen3Input.value = examen3;
        idInput.value = id;

    }
    //validar el formulario
        function validarForm(e){
            e.preventDefault();
            let nombre = nombreInput.value;
            let examen1 = parseInt(examen1Input.value);
            let examen2 = parseInt(examen2Input.value);
            let examen3 = parseInt(examen3Input.value);
            let id =      parseInt(idInput.value);
            let promedio = (examen1 * 0.30) + (examen2 * 0.30) + (examen3 * 0.40);
            promedio = promedio.toFixed(2)

           const objeto = {
               nombre: nombre,
               examen1: examen1,
               examen2: examen2,
               examen3: examen3,
               promedio: promedio,
               id: id
           }

           //validando el formulario
           if(nombreInput.value == '' || examen1Input.value == '' || examen2Input.value == '' || examen3Input.value == '' ){
              mostrarAlerta('Llene todos los campos del formulario');
           }else{
              editarDatos(objeto);
           }
          
        }

})();