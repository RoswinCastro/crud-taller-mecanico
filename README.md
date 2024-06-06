# Taller Mecánico - Base de Datos No Relacional

Este proyecto es una aplicación para gestionar un taller mecánico, utilizando una base de datos no relacional. A continuación, se detallan los pasos necesarios para configurar y ejecutar el proyecto en tu entorno local.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu sistema:

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/)
- [Postman](https://www.postman.com/downloads/)
- [MongoDB Compass](https://www.mongodb.com/try/download/compass)
- [Visual Studio Code](https://code.visualstudio.com/)

## Clonando el Repositorio

1. Abre Visual Studio Code.
2. Abre la terminal en Visual Studio Code.
3. Clona el repositorio utilizando el siguiente comando:

    ```sh
    git clone <URL_DEL_REPOSITORIO>
    ```

4. Navega al directorio del proyecto:

    ```sh
    cd <RUTA_DEL_PROYECTO>
    ```

## Configuración de TypeScript

Asegúrate de tener TypeScript configurado en tu entorno. Si no lo tienes, puedes instalarlo globalmente usando npm:

npm install -g typescript

## Instalación de Dependencias
Dentro del directorio del proyecto, instala las dependencias necesarias ejecutando:

sh
Copiar código
npm install
Configuración y Ejecución de Docker
Inicia Docker en tu sistema.

En la terminal de Visual Studio Code, ejecuta el siguiente comando para iniciar los contenedores:

sh
Copiar código
docker-compose up -d
Ejecución del Proyecto
En la terminal de Visual Studio Code, ejecuta el siguiente comando para iniciar la aplicación:

sh
Copiar código
npm run dev
Espera a que el servidor arranque correctamente.

Conexión a MongoDB con MongoDB Compass
En Visual Studio Code, copia la URL de conexión a MongoDB (MONGO_URL).
Abre MongoDB Compass.
Pega la URL en MongoDB Compass y conéctate para visualizar la base de datos.
Uso de Postman
Para interactuar con la API del taller mecánico, sigue las instrucciones detalladas en el video de YouTube que hemos proporcionado.
