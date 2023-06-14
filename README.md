# Firebase App with Next.js 13 and NextAuth.js

Este es un proyecto de muestra para una aplicación web utilizando Next.js 13, Firebase y NextAuth.js. Proporciona una base sólida para construir aplicaciones web modernas que utilizan la funcionalidad de Firebase para la autenticación y NextAuth.js para la gestión del inicio de sesión.

## Características

- **Next.js 13**: Un marco de trabajo de React para la construcción de aplicaciones web rápidas y escalables, con soporte para actualizaciones de página sin tiempo de inactividad.
- **Firebase**: Una plataforma de desarrollo de aplicaciones móviles y web de Google que proporciona una amplia gama de servicios en la nube, incluyendo autenticación de usuarios, almacenamiento de datos en tiempo real, alojamiento web y mucho más.
- **NextAuth.js**: Un paquete de autenticación para Next.js que simplifica la implementación de autenticación y gestión del inicio de sesión con diferentes proveedores como Google, Facebook, GitHub, entre otros.
- **Autenticación**: Integración de Firebase Authentication y NextAuth.js para la autenticación de usuarios, permitiendo a los usuarios registrarse, iniciar sesión y administrar sus perfiles utilizando diferentes proveedores.
- **Almacenamiento de datos en tiempo real**: Utilización de Firebase Realtime Database para almacenar y sincronizar datos en tiempo real.
- **Alojamiento web**: Implementación de la funcionalidad de alojamiento web de Firebase para publicar y servir la aplicación.

## Requisitos previos

Antes de comenzar con este proyecto, asegúrate de tener instalado lo siguiente:

- Node.js: Se recomienda la versión 14 o superior.
- NPM: Viene con Node.js, pero asegúrate de tener la última versión ejecutando `npm install -g npm`.
- Una cuenta de Firebase: Crea una cuenta gratuita en [https://firebase.google.com](https://firebase.google.com) si aún no tienes una.

## Configuración

Sigue estos pasos para configurar y ejecutar el proyecto:

1. Clona este repositorio o descarga los archivos en tu máquina local.

2. En la raíz del proyecto, crea un archivo `.env.local` y configura las siguientes variables de entorno:

  NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
  NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
  NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
  NEXTAUTH_URL=http://localhost:3000
  NEXTAUTH_SECRET = your-secret

3. Reemplaza los valores `your-api-key`, `your-auth-domain`, etc., con las credenciales de tu proyecto de Firebase. Puedes encontrar estas credenciales en la configuración de tu proyecto de Firebase en la consola de Firebase.

4. Abre una terminal en la carpeta del proyecto y ejecuta
 ```shell 
    npm install
 ``` 
 para instalar las dependencias.

5. Ejecuta
 ```shell
    npm run dev
 ```
 para iniciar el servidor de desarrollo local.

6. Abre tu navegador y ve a `http://localhost:3000` para ver la aplicación en funcionamiento.

7. Antes de ejecutar el proyecto, asegúrate de haber completado los pasos de configuración mencionados anteriormente.

8. En la terminal, dentro de la carpeta del proyecto, ejecuta el siguiente comando: npm run dev.

9. Espera a que el servidor de desarrollo se inicie correctamente. Verás un mensaje indicando que el servidor está listo y escuchando en http://localhost:3000.

10. Abre tu navegador web y visita http://localhost:3000 para ver la aplicación en funcionamiento.
