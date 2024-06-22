# Prueba Técnica de Desarrollo Backend: Rutas Protegidas

### Descripción  
Esta prueba evaluará tus habilidades en el desarrollo de aplicaciones backend utilizando Node.js. Deberás completar los siguientes ejercicios:

## Endpoints

### 1. Registro de Usuarios
- **Método:** POST
- **Ruta:** `/api/register`
- **Descripción:** Crea un nuevo usuario.
- **Parámetros requeridos:**
  - `email`: Dirección de correo electrónico del usuario.
  - `contraseña`: Contraseña del usuario.
  - `role`: Role del usuario.

### 2. Inicio de Sesión
- **Método:** POST
- **Ruta:** `/api/login`
- **Descripción:** Inicia sesión y devuelve un token de acceso.
- **Parámetros requeridos:**
  - `email`: Dirección de correo electrónico del usuario.
  - `contraseña`: Contraseña del usuario.

### 3. Obtener lista de usuarios (ruta protegida para usuarios)
- **Método:** GET
- **Ruta:** `/api/users`
- **Descripción:** Devuelve una lista de todos los usuarios registrados.
- **Requiere autenticación.**

### 4. Obtener detalles de un usuario específico (ruta protegida para usuarios)
- **Método:** GET
- **Ruta:** `/api/users/:id`
- **Descripción:** Devuelve los detalles de un usuario específico identificado por su `id`.
- **Requiere autenticación.**

### 5. Actualizar datos de un usuario existente (ruta protegida para usuarios)
- **Método:** PUT
- **Ruta:** `/api/users/:id`
- **Descripción:** Actualiza los datos de un usuario existente.
- **Parámetros requeridos:**
  - `email`: Nueva dirección de correo electrónico del usuario.
- **Requiere autenticación.**

### 6. Eliminar un usuario (ruta protegida para administradores)
- **Método:** DELETE
- **Ruta:** `/api/users/:id`
- **Descripción:** Elimina un usuario específico identificado por su `id`.
- **Requiere autenticación como administrador.**

## 7. Base de Datos en Memoria
Utilizamos una base de datos en memoria (por ejemplo, MongoDB o SQLite) para almacenar la información de los usuarios.

## 8. Validación de Datos
Implementamos validaciones para asegurarnos de que los datos ingresados sean correctos.

## 9. Documentación  
Proporciona una breve documentación en el archivo README.md sobre cómo ejecutar y probar la API.
