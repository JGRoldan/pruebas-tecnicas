# 📝 Gestión de Notas

## ✨ Descripción

Este proyecto es una aplicación para crear, listar, filtrar por etiquetas y eliminar notas. Permite a los usuarios organizar sus ideas y tareas mediante etiquetas personalizadas.

## 🌱 Características Principales

- ✍️ **Crear notas** con título, contenido y etiquetas.
- 🗂 **Listar todas las notas** con filtros por etiquetas.
- ❌ **Eliminar notas** existentes.
- 🔍 **Filtrado dinámico** de notas por etiquetas.

## 📚 Tecnologías Utilizadas

- **Frontend**: Vue 3 + Pinia + Vue Router + Tailwind CSS
- **Backend**: Node.js + Express
- **Base de Datos**: PostgreSQL
- **Gestión de Datos**: pg (PostgreSQL Client)
- **API Interna**: Endpoints REST para notas

## 📊 Estructura de la Base de Datos (SQL)

### Tabla `notes`

| id | title | content |
| -- | ----- | ------- |

### Tabla `tags`

| id | name |
| -- | ---- |

### Tabla `note_tags`

| note_id | tag_id |
| ------- | ------ |

> Las etiquetas se relacionan con las notas mediante la tabla `note_tags`, permitiendo múltiples etiquetas por nota.

## 🔄 Automatización

- **Actualización de notas**: cada vez que se crea o elimina una nota, la lista en el frontend se recarga automáticamente desde el backend.

## 🔄 Instalación y Ejecución

```bash
# Clonar el repositorio
git clone https://github.com/usuario/gestion-notas.git
cd gestion-notas

# Instalar dependencias del backend
cd backend
npm install

# Ejecutar backend
npm run dev

# Instalar dependencias del frontend
cd ../frontend
npm install

# Ejecutar frontend
cd frontend npm run dev

```

## 📢 API Endpoints 
- GET /notes → Obtiene todas las notas con sus etiquetas
- POST /notes → Crea una nueva nota
- DELETE /notes/:id → Elimina una nota por ID
```json{
  "title": "Título de la nota",
  "content": "Contenido de la nota",
  "tags": ["personal", "trabajo"]
}
```

## 📈 Futuras Mejoras 

- Agregar autenticación de usuarios
- Permitir edición de notas existentes
- Agregar notificaciones
  
## 👥 Contribuciones 
Las contribuciones son bienvenidas. Haz un **fork** del repositorio y envía un **pull request**.
