# Sitio Web de Trans AFAB Venezuela - Desarrollado por Voluntariado inkuA

Este repositorio contiene el código fuente del sitio web de **Trans AFAB Venezuela**, una colectiva trans venezolana que trabaja por los derechos humanos de la comunidad trans desde y para Venezuela. El sitio fue desarrollado de forma voluntaria por personas colaboradoras de la fundación **inkuA**, como parte de su programa de apoyo a otras organizaciones y ONGs.

## ✨ Sobre el proyecto

La fundación **inkuA** impulsa el desarrollo de sitios web para organizaciones sin fines de lucro sin ningún tipo de retribución económica. Todo el diseño y desarrollo es realizado por personas voluntarias. En caso de realizarse identidad visual o piezas gráficas, estas son donadas íntegramente a la fundación beneficiaria, y los y las voluntarias pueden incluir el trabajo en su portafolio personal.

En este caso, **Trans AFAB Venezuela** ya contaba con una identidad visual consolidada, por lo tanto, no se trabajó sobre su branding. Este repositorio contiene exclusivamente el desarrollo del sitio web.

> ⚠️ **Importante:** El código queda licenciado como **open source**. No es propiedad de la fundación beneficiaria. 

---

## 🧠 Funcionalidades principales

El sitio web ofrece una plataforma dinámica y administrable con las siguientes funcionalidades:

- Gestión de contenido dinámico desde un **panel administrativo protegido** mediante autenticación.
- Gestión completa (crear, editar, eliminar) de:
  - Artículos
  - Eventos
  - Recursos de la comunidad
  - Videos
- Páginas públicas informativas y de interacción con la comunidad.
- Integración con servicios como Firebase y Cloudinary.
- Envío de correos mediante `nodemailer` y Gmail App Key.
- Componente visual moderno y accesible, utilizando **Tailwind CSS**.

---

## 🧭 Arquitectura del Proyecto

- **Framework principal:** [Next.js](https://nextjs.org/)
- **Estilos:** Tailwind CSS
- **Separación de rutas:** Uso de **Route Groups** para distinguir:
  - `/admin` – Panel administrativo
  - `/auth` – Lógica de autenticación (Login, Recuperación)
  - `/` – Vistas públicas
- **Persistencia desacoplada:** Patrón **DAO (Data Access Object)** que permite cambiar fácilmente servicios de almacenamiento como Firebase o Cloudinary.

---

## 🖥️ Páginas incluidas

### 🏠 Página principal (`/`)
- Inicio
- Artículos (y detalle de artículo)
- Donar
- Nosotros
- Preguntas frecuentes
- Recursos de la comunidad

### 🔐 Autenticación (`/auth`)
- Login
- Cambio de contraseña

### ⚙️ Panel administrativo (`/admin`)
- Gestión de administradores
- Eventos
- Artículos
- Perfil del usuario
- Recursos
- Videos
- Configuración general

---

## ⚒️ Tecnologías y dependencias

### 📦 Dependencias principales

- **@hookform/resolvers**: Validadores para formularios usando Yup, Zod, entre otros.
- **browser-image-compression**: Comprime imágenes en el navegador antes de subirlas.
- **cloudinary**: SDK para subir y gestionar imágenes en la nube de Cloudinary.
- **dompurify**: Sanitiza HTML para prevenir XSS (muy útil con contenido dinámico).
- **draft-convert** / **draft-js**: Editor de texto enriquecido (usado para artículos y contenido editable).
- **firebase**: Base de datos, autenticación y almacenamiento de archivos.
- **immutable**: Librería para estructuras de datos inmutables, útil en el manejo de estado.
- **jose**: Librería para el manejo de JWT y encriptación.
- **nodemailer**: Envío de correos desde el servidor.
- **react-hook-form**: Librería para construir formularios eficientes en React.
- **react-toastify**: Notificaciones tipo "toast" fáciles de implementar.
- **swiper**: Carrusel responsivo y personalizable.
- **yup**: Validación de esquemas de datos, especialmente para formularios.

> 📌 Para ver el listado completo de dependencias y sus versiones, consulta el archivo [`package.json`](./package.json).


### 🧪 Tecnologías principales

- Next.js
- React
- Tailwind CSS

### ☁️ Servicios externos

- Cloudinary
- Firebase / Firestore
- Vercel – Hosting del sitio

---
## 🔐 Variables de entorno
Crea un archivo `.env`  en la raíz del proyecto y añade las siguientes variables:
#### Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...

#### URL del proyecto
NEXT_PUBLIC_URL=https://tudominio.vercel.app

#### Cloudinary
CLOUD_NAME=...
CLOUD_KEY=...
CLOUD_SECRET=...

#### Token Secret
SECRET=text-secret

#### Gmail App Key
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

---
## 🚀 Instalación y ejecución local
1. Clona el repositorio:
```sh
git clone https://github.com/inkua/TAFAB.git
cd TAFAB
```
2. Instala dependencias:
```sh
npm install
```
3. Crea el archivo `.env`con las variables de entorno necesarias
4. Ejecuta el proyecto en modo desarrollo:
```sh
npm run dev
```
5. Abre `http://localhost:3000` tu navegador
 

---
## 🤝 Contribuciones
Este proyecto es parte del programa de voluntariado de inkuA. Las personas que colaboraron pueden añadir este trabajo a su portafolio profesional. Las contribuciones externas son bienvenidas mediante Pull Requests, siempre siguiendo los principios del proyecto.

---
## 📄 Licencia
Este proyecto se encuentra bajo licencia MIT. Puedes reutilizar, modificar y distribuir este código bajo los términos de dicha licencia. El código no es propiedad de la fundación beneficiaria.

---
## 💌 Contacto
¿Quieres colaborar con inkuA o necesitas un sitio web para tu organización sin fines de lucro?
Escríbenos a inkuA.de

---
## ❤️ Créditos
Desarrollado con amor y compromiso social por el equipo voluntario de inkuA para Trans AFAB Venezuela.


## Project Development:
This project was developed following agile methodology principles, with a team organized by roles:

- Project Manager & Technical Leader: Manuel Florez, [linkedin](https://www.linkedin.com/in/manuel14mds/), [GitHub Profile](https://github.com/manuel14mds)
- Graphic/UX/UI Designer: Danila Cardinale, [linkedin](https://www.linkedin.com/in/danila-cardinale/), [Behance](https://www.behance.net/DaniLaCardinale)
- Graphic/UX/UI Designer: Diego Campos, [linkedin](https://www.linkedin.com/in/diegocamposc/), [Behance](https://www.behance.net/degocam)
- Software Developer: Joel Waiman, [linkedin](https://www.linkedin.com/in/joel-waiman97/), [GitHub Profile](https://github.com/joelwaiman)
- Software Developer: Exequiel Schiavo [linkedin](https://www.linkedin.com/in/exequiel-schiavo/), [GitHub Profile](https://github.com/Exeq10)
- Software Developer: Mauro Radino, [linkedin](https://www.linkedin.com/in/mauro-radino/), [GitHub Profile](https://github.com/mauroradino)


> Thank you for taking the time to read through this README. We hope that this project will be helpful and beneficial for your needs. Your support and interest mean a lot to us, and we’re excited to see how this project might contribute to the great work being done. If you have any questions or need further assistance, please don't hesitate to reach out.

[![N|inkua](https://inkua.de/web/image/1324-2e45f650/rgb-1000px-blanco.webp)](https://inkua.de)