# 🍲 API de Recetas con Autenticación de Usuarios

Proyecto de **backend** desarrollado con **Node.js, Express y MongoDB** que permite administrar recetas de cocina, gestionar usuarios y realizar autenticación mediante **JWT**.

---

## 📌 Funcionalidades

- 👤 **Usuarios**
  - Registro de usuarios con email y contraseña (encriptada con `bcrypt`).
  - Login con validación y generación de token **JWT**.
  
- 📖 **Recetas**
  - Crear, leer, actualizar y eliminar recetas.
  - Validación de datos antes de guardarlos en la base de datos.
  
- 🛡️ **Seguridad**
  - Encriptación de contraseñas con `bcrypt`.
  - Autenticación de endpoints protegidos con **JWT**.
  - Validación de inputs con `express-validator`.

---

## 🗄️ Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- jsonwebtoken
- express-validator
- cors
- morgan


---
## **🛠 Instalación y Ejecución**  

1. **Clona el repositorio**  
   ```bash
   git clone https://github.com/hernanortiz1/19-backendCafe.git
  
   ```

2. **Instala las dependencias**  
   ```bash
   npm install
   ```

3. **Ejecuta el proyecto**  
   ```bash
   npm run dev
   ```
---
## 👤 Autor

- **Hernán Ortiz**  
  [GitHub](https://github.com/hernanortiz1) | [LinkedIn](https://www.linkedin.com/in/hern%C3%A1n-ortiz/)  
  *Desarrollador*

