# Prueba Técnica de Desarrollo Backend: Rutas Protegidas

### Descripción  
Esta prueba evaluará tus habilidades en el desarrollo de aplicaciones backend. Deberás completar los siguientes ejercicios:

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

### 3. Vista solo de usuarios (ruta protegida para usuarios)
- **Método:** GET
- **Ruta:** `/api/profile`
- **Descripción:** Vista solo de usuarios.
- **Requiere autenticación.**

### 4. Vista solo de admin (ruta protegida para admin)
- **Método:** GET
- **Ruta:** `/api/admin`
- **Descripción:** Vista solo de admin.
- **Requiere autenticación.**
  
### 5. Vista de cualquier persona (ruta no protegida)
- **Método:** GET
- **Ruta:** `/api/any`
- **Descripción:** Vista de cualquier persona.

## 6. Base de Datos en Memoria
Utilizamos una base de datos en memoria (por ejemplo, MongoDB o SQLite) para almacenar la información de los usuarios.

## 7. Validación de Datos
Implementamos validaciones para asegurarnos de que los datos ingresados sean correctos.

## 8. Documentación  
Proporciona una breve documentación en el archivo README.md sobre cómo ejecutar y probar la API.
