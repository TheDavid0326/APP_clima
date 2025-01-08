## Aplicación meteorológica con OpenWeatherMap

Este proyecto es una aplicación web que permite consultar el tiempo atmosférico de cualquier ciudad del mundo. 

**Características:**

* **Búsqueda por ciudad:** Introduce el nombre de una ciudad para obtener información meteorológica actualizada.
* **Datos del tiempo:** Muestra la temperatura, la descripción del clima y un icono representativo.
* **Diseño simple:** Interfaz limpia y fácil de usar.

**Tecnologías utilizadas:**

* **HTML:** Estructura la página web y los elementos del formulario.
* **CSS:** Estiliza la apariencia de la página, incluyendo el diseño del formulario y la presentación de los datos del tiempo.
* **JavaScript:** Maneja la interacción del usuario, realiza peticiones a la API de OpenWeatherMap y muestra los datos en la página.
* **Fetch API:** Proporciona una forma moderna de realizar peticiones HTTP desde el navegador.

**Funcionamiento:**

1. El usuario introduce el nombre de una ciudad en el campo de búsqueda.
2. Al hacer clic en el botón "Buscar", se activa la función `fetchAPI()`.
3. La función `fetchAPI()` construye una URL utilizando la API key y el nombre de la ciudad ingresada.
4. Se realiza una petición GET a la API de OpenWeatherMap utilizando la librería Fetch API.
5. La respuesta de la API se procesa en formato JSON.
6. La función `showData()` extrae los datos relevantes de la respuesta (nombre de la ciudad, país, temperatura, descripción del clima e icono) y los muestra en el DOM creando elementos HTML dinámicamente.

**Aprendizajes clave:**

* **Peticiones HTTP con Fetch API:** Realizar solicitudes a APIs externas para obtener datos.
* **Procesamiento de JSON:** Manejar y extraer información de respuestas en formato JSON.
* **Manipulación del DOM:** Crear y modificar elementos HTML de forma dinámica para actualizar la interfaz.
* **Evento click:** Responder a las acciones del usuario (clic en el botón).

**Cómo utilizar:**

1. Clona este repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Introduce el nombre de una ciudad en el campo de búsqueda.
4. Haz clic en el botón "Buscar".

**Nota:**

* Este ejemplo requiere una API key de OpenWeatherMap. Puedes obtener una gratis registrándote en su sitio web.
* Reemplaza `'09bf505a2665dd9ad67bb85b6880467e'` con tu propia API key.

**Demostración:**
https://calculadora-html-css-y-js.netlify.app/

Este README describe las funcionalidades de tu aplicación meteorológica, las tecnologías utilizadas y cómo utilizarla. También incluye información importante sobre la API key de OpenWeatherMap.
