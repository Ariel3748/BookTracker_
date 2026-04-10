# 📚 BookTracker 

**BookTracker** es una aplicación web diseñada para amantes de la lectura que buscan llevar un registro detallado y estético de su biblioteca personal. Este proyecto nació de la necesidad de practicar el flujo completo de una aplicación **CRUD** (Create, Read, Update, Delete) y la integración con una API mediante métodos HTTP, consolidando mis conocimientos en el ecosistema de React.

---

## 🎯 Motivación y Objetivos
Este proyecto surgió por dos grandes razones:
1.  **Hábito de Lectura:** Como lector constante, buscaba una herramienta propia para trackear mis progresos, guardar comentarios y calificar mis libros favoritos.
2.  **Desafío Técnico:** Mi meta principal fue dominar el flujo de trabajo con APIs, y sobre todo, la reutilización de componentes. Logré diseñar un único sistema de formulario que se adapta dinámicamente tanto para la creación de nuevos libros como para la edición de los existentes.

## 🚀 Tecnologías Utilizadas
El proyecto utiliza un stack moderno orientado al rendimiento:
* **Frontend:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/).
* **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/).
* **Routing:** [React Router 7](https://reactrouter.com/).
* **Backend Simulado:** [JSON Server](https://github.com/typicode/json-server) para la persistencia de datos en un archivo `db.json`.
* **Feedback Visual:** [SweetAlert2](https://sweetalert2.github.io/) para notificaciones y [React Flexible Star Rating](https://www.npmjs.com/package/react-flexible-star-rating) para valoraciones.

## 🧠 Aprendizajes Clave
* **Arquitectura de Datos:** Consolidación de los métodos **GET, POST, PUT y DELETE** en un entorno de desarrollo real.
* **Lógica Independiente:** Me propuse (y logré) desarrollar la lógica central del negocio de forma autónoma, priorizando el entendimiento del estado de React y los efectos.
* **Modularización:** Abstracción de componentes para lograr un código mantenible y escalable.

## 🛠️ Instalación y Uso

Para ejecutar este proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/booktracker-v2.git](https://github.com/Ariel3748/BookTracker_)
    cd booktracker-v2
    ```

2.  **Instalar las dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar el proyecto:**
    Es necesario abrir **dos terminales** simultáneamente:

    * **Terminal 1 (Frontend):**
        ```bash
        npm run dev
        ```
    * **Terminal 2 (Mock Backend):**
        ```bash
        npm run server
        ```

4.  Abrir el navegador en `http://localhost:5173`.

## ⚡ Próximos Pasos (Roadmap)
Este proyecto es el primer paso hacia una arquitectura más robusta:
* [ ] Migrar el backend a un servidor real desarrollado en **Node.js** con Express.
* [ ] Implementar persistencia de datos en **MongoDB**.
* [ ] Añadir autenticación de usuarios.

---
Desarrollado por [Ariel Oliva](https://github.com/Ariel3748) - Estudiante de Lic. en Informática (UNAHUR)