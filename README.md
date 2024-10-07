# Proyecto: Página Web de Enseñanza de Lengua de Señas Colombiana

Este proyecto tiene como objetivo crear una plataforma para la enseñanza de la lengua de señas de Colombia. Los usuarios podrán registrarse utilizando varias opciones (correo electrónico, Google, Facebook, teléfono), y la aplicación permitirá explorar diferentes módulos con actividades diseñadas para aprender esta lengua. Los usuarios podrán acceder hasta cierto punto sin registrarse y luego se les solicitará crear una cuenta para continuar.

## Tecnologías Utilizadas

- **Frontend**: 
  - [React](https://reactjs.org/) - para la creación de la interfaz de usuario interactiva.
  - [Supabase](https://supabase.com/) - para la autenticación de usuarios y manejo de almacenamiento.
- **Backend**:
  - [Supabase](https://app.supabase.com/): base de datos Postgres alojada con API RESTful para interactuar con los datos.
- **Despliegue**:
  - Utilizamos **GitHub Actions** para la integración continua y el despliegue automatizado.
  - El sitio web será alojado en **GitHub Pages**.

## Instalación y Configuración

### 1. Clonar el Repositorio

Clona el proyecto en tu máquina local usando:

```bash
git clone https://github.com/Sorcol-App/web

## 2. Configuración del Entorno

Dentro del directorio del proyecto clonado, crea un archivo `.env.local` con las siguientes variables de entorno:

```bash
REACT_APP_SUPABASE_URL=<tu_url_de_supabase>
REACT_APP_SUPABASE_ANON_KEY=<tu_anon_key_de_supabase>


## 3. Instalación de Dependencias

Asegúrate de tener instalada una versión reciente de Node.js. Luego, instala las dependencias del proyecto ejecutando:

```bash
npm install

## 4. Ejecutar en Desarrollo

Para iniciar la aplicación en modo de desarrollo, ejecuta:

```bash
npm start

Esto abrirá el proyecto en http://localhost:3000.

## Flujo de Trabajo de Ramas

```mermaid
graph TD;
    main-->develop;
    develop-->feature_1;
    develop-->feature_2;
    feature_1-->develop;
    feature_2-->develop;
    develop-->main;

## Prototipos

Para garantizar una experiencia de usuario óptima y un flujo de trabajo eficiente, hemos desarrollado prototipos de alta fidelidad utilizando **Figma**. Estos prototipos ayudan a visualizar la interfaz de usuario y la experiencia general antes de comenzar el desarrollo completo de la aplicación.

Puedes acceder a los prototipos interactivos y mockups del proyecto en el siguiente enlace:

[Ver Prototipos en Figma](<https://www.figma.com/design/lbgyDGM2PJF580cGRg8kRU/Design-System?node-id=1332-29&node-type=canvas&m=dev>)

Los prototipos incluyen:

- Diseño de la página principal.
- Flujos de registro e inicio de sesión de usuarios.
- Pantallas de perfil y actualización de información.
- Interfaces de gestión de contenido.

El prototipo está sujeto a actualizaciones continuas conforme avanza el desarrollo del proyecto.
