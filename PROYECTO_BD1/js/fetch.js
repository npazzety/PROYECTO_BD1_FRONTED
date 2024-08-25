// Función para obtener todos los archivos
async function obtenerArchivos() {
    try {
        const response = await fetch('/archivos/obtenerArchivos');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const archivos = await response.json();
        console.log('Archivos obtenidos:', archivos);
        return archivos;
    } catch (error) {
        console.error('Error al obtener archivos:', error);
    }
}

// Función para buscar un archivo específico por ID
async function buscarArchivo(id) {
    try {
        const response = await fetch(`/archivos/buscarArchivos?id=${id}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const archivo = await response.json();
        console.log('Archivo encontrado:', archivo);
        return archivo;
    } catch (error) {
        console.error('Error al buscar archivo:', error);
    }
}

// Ejemplo de uso de las funciones

// Obtener todos los archivos
obtenerArchivos().then(archivos => {
    // Aquí puedes hacer algo con la lista de archivos
});

// Buscar un archivo específico por ID
const archivoId = 123; // Reemplaza con el ID que quieras buscar
buscarArchivo(archivoId).then(archivo => {
    // Aquí puedes hacer algo con el archivo encontrado
});

CARPTEAS 
// Función para obtener todas las carpetas
async function obtenerCarpetas() {
    try {
        const response = await fetch('/carpetas/obtenerCarpetas');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const carpetas = await response.json();
        console.log('Carpetas obtenidas:', carpetas);
        return carpetas;
    } catch (error) {
        console.error('Error al obtener carpetas:', error);
    }
}

// Función para buscar una carpeta específica por ID
async function buscarCarpeta(id) {
    try {
        const response = await fetch(`/carpetas/buscarCarpetas?id=${id}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const carpeta = await response.json();
        console.log('Carpeta encontrada:', carpeta);
        return carpeta;
    } catch (error) {
        console.error('Error al buscar carpeta:', error);
    }
}

// Ejemplo de uso de las funciones

// Obtener todas las carpetas
obtenerCarpetas().then(carpetas => {
    // Aquí puedes hacer algo con la lista de carpetas
});

// Buscar una carpeta específica por ID
const carpetaId = 456; // Reemplaza con el ID que quieras buscar
buscarCarpeta(carpetaId).then(carpeta => {
    // Aquí puedes hacer algo con la carpeta encontrada
});


GENEROS
// Función para obtener todos los géneros
async function obtenerGeneros() {
    try {
        const response = await fetch('/genero/obtener');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const generos = await response.json();
        console.log('Géneros obtenidos:', generos);
        return generos;
    } catch (error) {
        console.error('Error al obtener géneros:', error);
    }
}

// Función para buscar un género específico por ID
async function buscarGenero(id) {
    try {
        const response = await fetch(`/genero/buscar?id=${id}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const genero = await response.json();
        console.log('Género encontrado:', genero);
        return genero;
    } catch (error) {
        console.error('Error al buscar género:', error);
    }
}

// Ejemplo de uso de las funciones

// Obtener todos los géneros
obtenerGeneros().then(generos => {
    // Aquí puedes hacer algo con la lista de géneros
});

// Buscar un género específico por ID
const generoId = 789; // Reemplaza con el ID que quieras buscar
buscarGenero(generoId).then(genero => {
    // Aquí puedes hacer algo con el género encontrado
});


IDIOMA
// Función para obtener todos los idiomas
async function obtenerIdiomas() {
    try {
        const response = await fetch('/idiomas/obtener');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const idiomas = await response.json();
        console.log('Idiomas obtenidos:', idiomas);
        return idiomas;
    } catch (error) {
        console.error('Error al obtener idiomas:', error);
    }
}

// Función para buscar un idioma específico por ID
async function buscarIdioma(id) {
    try {
        const response = await fetch(`/idiomas/buscar?id=${id}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const idioma = await response.json();
        console.log('Idioma encontrado:', idioma);
        return idioma;
    } catch (error) {
        console.error('Error al buscar idioma:', error);
    }
}

// Ejemplo de uso de las funciones

// Obtener todos los idiomas
obtenerIdiomas().then(idiomas => {
    // Aquí puedes hacer algo con la lista de idiomas
});

// Buscar un idioma específico por ID
const idiomaId = 101; // Reemplaza con el ID que quieras buscar
buscarIdioma(idiomaId).then(idioma => {
    // Aquí puedes hacer algo con el idioma encontrado
});


PAISES
// Función para obtener todos los países
async function obtenerPaises() {
    try {
        const response = await fetch('/paises/obtener');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const paises = await response.json();
        console.log('Paises obtenidos:', paises);
        return paises;
    } catch (error) {
        console.error('Error al obtener países:', error);
    }
}

// Ejemplo de uso de la función

// Obtener todos los países
obtenerPaises().then(paises => {
    // Aquí puedes hacer algo con la lista de países
});


USUARIO
// Función para validar un usuario
async function validarUsuario(correo, contrasenia) {
    try {
        // Construir la URL con parámetros de consulta
        const url = new URL('/usuario/validar', window.location.origin);
        url.searchParams.append('correo', correo);
        url.searchParams.append('contrasenia', contrasenia);

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Convertir la respuesta a texto
        const resultado = await response.text();
        console.log('Resultado de la validación:', resultado);
        return resultado;
    } catch (error) {
        console.error('Error al validar usuario:', error);
    }
}

// Ejemplo de uso de la función

// Validar un usuario con correo y contraseña
const correo = 'usuario@example.com'; // Reemplaza con el correo real
const contrasenia = 'miContrasenia'; // Reemplaza con la contraseña real
validarUsuario(correo, contrasenia).then(resultado => {
    // Aquí puedes hacer algo con el resultado de la validación
});

