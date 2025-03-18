# 🎬 Práctica: Explorando Películas con TMDb y Axios

## 🎯 Objetivo

Crear una aplicación web que permita explorar películas populares utilizando **Axios** con **async/await**, mostrando 10 resultados por página y permitiendo la navegación entre páginas. Además, al hacer clic en una película, se mostrará un detalle ampliado de la misma.

## 📌 Requisitos

- Utilizar **Axios** en lugar de `fetch()`.
- Manejar promesas con **async/await**.
- Implementar un **input** para que el usuario busque películas.
- Agregar **botones de paginación** (siguiente/anterior).
- Mostrar un **loading** mientras se cargan los datos.
- Permitir que el usuario haga clic en una película para ver más detalles.

## 🌍 API a utilizar

- **TMDb API (The Movie Database)**
  - 📌 URL base para obtener películas populares:
    ```
    https://api.themoviedb.org/3/movie/popular
    ```
  - 🔍 URL para buscar películas por nombre:
    ```
    https://api.themoviedb.org/3/search/movie
    ```
  - 📜 URL para obtener detalles de una película:
    ```
    https://api.themoviedb.org/3/movie/{movie_id}
    ```
  - 🔑 **Se requiere autenticación** con una `API Key` en la URL o en los headers.

---

## 🚀 Pasos a seguir

### 1️⃣ Configurar el HTML

- Crear un `input` donde el usuario escriba el nombre de la película a buscar.
- Agregar un `botón` para iniciar la búsqueda.
- Incluir un `div` donde se mostrarán los resultados.
- Agregar `botones de paginación` (anterior y siguiente).
- Mostrar un **mensaje de carga** mientras se realiza la petición.
- Incluir un `modal` o una **sección oculta** donde se mostrará el detalle de una película al hacer clic en ella.

### 2️⃣ Configurar el JavaScript

- Capturar elementos del DOM:

  - `input` de búsqueda
  - `botón` de búsqueda
  - Contenedor de películas
  - Botones de paginación
  - Modal de detalle

- Agregar eventos:

  - Al botón de búsqueda para iniciar la consulta.
  - A los botones de paginación para cambiar de página.
  - A las películas para abrir el modal con los detalles.

- Crear funciones necesarias:
  - Función para realizar la búsqueda de películas.
  - Función para manejar la paginación.
  - Función para obtener y mostrar los detalles de una película.

### 3️⃣ Hacer la petición con Axios y async/await

1. https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js)

### Construir la URL de la API con el término de búsqueda o la lista de películas populares.

- Realizar la solicitud usando async/await.
- Procesar la respuesta en formato JSON.
- Mostrar las películas en el DOM.

### 4️⃣ Manejar errores

- Capturar errores con try/catch y mostrar un mensaje de error si la petición falla.

### 5️⃣ Implementar paginación

- Controlar el número de página con una variable.
- Modificar la URL de la API para solicitar la página deseada.
- Actualizar los resultados al cambiar de página.

### 6️⃣ Mostrar detalle de una película

- Al hacer clic en una película, obtener su id.
- Hacer una nueva petición a la API para obtener más información.
- Mostrar en el modal el título, póster y descripción de la película.
- Permitir cerrar el modal para volver a la lista de películas.

### 🎬 Consejo: Explora la documentación oficial de TMDb para ver más opciones y parámetros de búsqueda. ¡Diviértete programando! 🚀
