// llamada a las API

//url del API-REST
const url = "http://localhost:4000/estudiantes";
//agregar datos
export const agregarDatos = async (objeto) => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(objeto),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error)
    }
}

//mostrar datos
export const mostrarDatos = async() => {
    try {
        const res = await fetch(url);
        const data = res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

//eliminar datos
export const eliminarDatos = async (id) => {
    try {
        await fetch(`${url}/${id}`, {
               method: 'DELETE'
        })
    } catch (error) {
        console.log(error)
    }
}

//mostrar datos del cliente seleccionado
export const mostrarDatosEstudiante = async (id) => {
    try {
        const resp = await fetch(`${url}/${id}`);
        const data = resp.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

//editar los datos
export const editarDatos = async (objeto) => {
    try {
        await fetch(`${url}/${objeto.id}`, {
            method: 'PUT',
            body: JSON.stringify(objeto),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error)
    }

}