<h1> Evaluacion Final del modulo 2. </h1>
##Realizada por Bella Irene Garcia Villegas.

He usadp Started Kit Adalab.

> **NOTA:** Basado en el Adalab Starter Kit .

En este proyecto hay 3 tipos de ficheros y carpetas:

Los ficheros que están sueltos en la raíz del repositorio, como gulpfile.js, package.json... Son la configuración del proyecto y no necesitamos modificarlos.
La carpeta src/: son los ficheros de nuestra página web, como HTML, CSS, JS...
La carpeta docs/, que son automáticamente cuando arrancamos el proyecto. El Kit lee los ficheros que hay dentro de src/, los procesa y los genera dentro de docs/.
Introducción al proyecto
Se trata de una aplicación web de Breaking Bad , que nos muestra los personajes y nos permite marcarlos y desmarcarlos como favoritos y guardarlos en local storage. También nos permitirá realizar una búsqueda por el nombre del personaje.

Para sacar el listado, las características y las imágenes de los personajes haremos uso de The Breaking Bad API .

La aplicación realizada es completamente responsive y funciona tanto en móvil como tablet o desktop. Tiene alguna funcionalidad exclusiva de móvil, como por ejemplo el botón de favoritos, que nos lleva directamente a la sección de favoritos para hacer más cómoda la navegación.

guia de inicio rapido

NOTA: Necesitas tener instalado Node JS para trabajar con este proyecto:

Pasos a seguir si queremos arrancar un proyecto basado en este desde cero:
Crea tu propio repositorio.
Descarga este proyecto desde GitHub .
No recomendamos que clones este repo ya que no podrás añadir commits.
Copia todos los ficheros de este proyecto en la carpeta raíz de tu repositorio.
Recuerda que debes copiar también los ficheros ocultos .
Si ha decidido clonar este repositorio, no debe copiar la carpeta .git. Si lo haces estarás machacando tu propio repositorio.
Abre una terminal en la carpeta raíz de tu repositorio.
Instala las dependencias locales obtenidas en la terminal el comando:
npm install
Pasos para arrancar el proyecto:
Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. El proyecto hay que arrancarlo cada vez que te pongas a programar. Para ello ejecuta el comando:

npm start
Este comando:

Abre una ventana de Chrome y muestra tu página web , al igual que hace el complemento de VS Code Live Server (Go live).
También observa todos los ficheros que hay dentro de la carpeta src/, para que cada vez que modifiques un fichero refresca tu página en Chrome .
También procesa los ficheros HTML, SASS/CSS y JS y los genera y guarda en la carpetapublic/ . Por ejemplo:
Convierte los ficheros SASS en CSS.
Combina los diferentes ficheros de HTML y los agrupa en uno o varios ficheros HTML.
Después de ejecutar npm startya puedes empezar a editar todos los ficheros que están dentro de la carpeta src/y programar cómodamente.

Pasos para generar la carpeta docs:
Ejecutar el siguiente comando:

npm run docs
Ello nos generará una carpeta docs/que subiremos al repositorio.
Posteriormente, con las páginas de GitHub le indicaremos que la utilice para generar la web de nuestro proyecto.
Habrá que ejecutar este comando al final del proyecto cuando ya esté terminado y queramos publicarlo.
Si hacemos algún cambio habrá que ejecutarlo de nuevo y subir la carpeta docs/nuevamente al repositorio.
