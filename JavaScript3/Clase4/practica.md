# 📸 Práctica: Búsqueda de Imágenes con Unsplash y Fetch

### 🎯 Objetivo

Crear una aplicación web que permita buscar imágenes en Unsplash usando fetch, mostrando 10 resultados por página y permitiendo la navegación entre páginas. Además, al hacer clic en una imagen, se mostrará un detalle ampliado de la misma.

### 📌 Requisitos

Utilizar fetch con el método GET.

Manejar promesas con .then() y capturar errores con .catch().

Implementar un input para que el usuario escriba la búsqueda.

Agregar botones de paginación (siguiente/anterior).

Mostrar un loading mientras se cargan las imágenes.

Permitir que el usuario haga clic en una imagen para ver su detalle ampliado.

### 🌍 API a utilizar

Unsplash API

### 📌 URL base para búsqueda:

https://api.unsplash.com/search/photos

### 🔍 URL para obtener el detalle de una imagen:

https://api.unsplash.com/photos/{id}

### 🔑 La API requiere autenticación mediante un Client-ID en el header.

## 🚀 Pasos a seguir

### 1️⃣ Configurar el HTML

Crear un input donde el usuario escriba la palabra clave a buscar.

Agregar un botón para iniciar la búsqueda.

Incluir un div donde se mostrarán las imágenes obtenidas.

Agregar botones de paginación (anterior y siguiente).

Mostrar un mensaje de carga mientras se realiza la petición.

Incluir un modal o una sección oculta donde se mostrará el detalle de una imagen al hacer clic en ella.

### 2️⃣ Configurar el JavaScript

Capturar elementos del DOM:

input de búsqueda

botón de búsqueda

Contenedor de imágenes

Botones de paginación

Modal de detalle

Agregar eventos:

Al botón de búsqueda para iniciar la consulta.

A los botones de paginación para cambiar de página.

A las imágenes para abrir el modal con el detalle.

Crear funciones necesarias:

Función para realizar la búsqueda.

Función para manejar la paginación.

Función para actualizar el contenido del modal.

### 3️⃣ Hacer la petición con Fetch

Construir la URL de la API con el término de búsqueda.

Realizar la solicitud con fetch:

fetch(`https://api.unsplash.com/search/photos?query=palabraClave&page=1&per_page=10`, {
headers: {
Authorization: `Client-ID TU_API_KEY`
}
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));

Procesar la respuesta en formato JSON.

Mostrar las imágenes en el DOM.

### 4️⃣ Manejar errores

Usar .catch() para capturar errores y mostrar un mensaje en caso de fallos.

Ejemplo de manejo de error:

.catch(error => {
console.error("Hubo un error en la petición:", error);
alert("Ocurrió un error. Inténtalo nuevamente.");
});

### 5️⃣ Implementar paginación

Controlar el número de página con una variable.

Modificar la URL de la API para solicitar la página deseada.

Actualizar los resultados al cambiar de página.

### 6️⃣ Mostrar detalle de una imagen

Al hacer clic en una imagen, obtener su id.

Hacer una nueva petición a la API para obtener más información:

fetch(`https://api.unsplash.com/photos/${id}`, {
headers: {
Authorization: `Client-ID TU_API_KEY`
}
})
.then(response => response.json())
.then(data => {
console.log("Detalle de la imagen:", data);
// Aquí se puede actualizar el modal con la información obtenida
});

Mostrar en el modal la imagen en mayor tamaño, el nombre del fotógrafo y el enlace a Unsplash.

Permitir cerrar el modal para volver a la galería.

#### 💡 Consejo: Explora la documentación oficial de Unsplash para entender más opciones de búsqueda y filtros disponibles. ¡Diviértete programando! 🚀
