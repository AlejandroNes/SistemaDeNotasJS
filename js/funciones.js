//agregando funciones

export function mostrarAlerta(mensaje){
    const resultado = document.querySelector('.resultado')
    const error = document.querySelector('.error')
    if(!error){
        const alerta = document.createElement('div');
        alerta.classList.add('alert', 'alert-danger', 'text-center', 'p-0', 'mt-3', 'error');
        alerta.innerHTML = `
            <h4>Error!...</h4>
            <p>${mensaje}</p>
        `
        resultado.appendChild(alerta);
        setTimeout( ()=> {
            alerta.remove();
        },2000 )
    }

}