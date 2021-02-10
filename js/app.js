//imports
import { mostrarDatos, eliminarDatos } from './API.js';

(function(){
    //variables
    const lista = document.querySelector('#lista')
    //eventos
    document.addEventListener('DOMContentLoaded', mostrar);
    lista.addEventListener('click', eliminar);
    //funciones
    async function mostrar(){

       const datosEstudiante = await(mostrarDatos())
        mostrarHTML(datosEstudiante);
    }

    //mostrar en el HTML
    function mostrarHTML(estudiante){
        estudiante.forEach(item => {
            const {nombre, examen1, examen2, examen3, promedio, id} = item
            let prom = document.querySelector('.prom')
            const row = document.createElement('tr')
            row.innerHTML = /*html*/`
            <th>${nombre}</th>
            <td>${examen1}</td>
            <td>${examen2}</td>
            <td>${examen3}</td>
            <td>${Number(promedio)}</td>
            <td>
                <a  href="editarEstudiante.html?id=${id}" class="btn btn-warning btn-sm mx-1">
                    <i  class="fas fa-user-edit"></i></a>
                <a class="btn btn-danger btn-sm mx-1">
                    <i data-estudiante="${id}" class="fas fa-trash eliminar"></i>
                </a>
            </td>
            `
            lista.appendChild(row);
        });
    }
    function eliminar(e){
        if(e.target.classList.contains('eliminar')){
            const estudianteID = Number(e.target.dataset.estudiante)
            const confirmar =confirm('Desea eliminar?')
            if(confirmar){
                eliminarDatos(estudianteID);
                return
            }
        }
    }

})()

