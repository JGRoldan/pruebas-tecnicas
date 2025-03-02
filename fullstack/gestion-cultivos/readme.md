# 🌾 Gestión de Cultivos para Agricultores

## ✨ Descripción

Este proyecto es un sistema para monitorear cultivos, condiciones climáticas y rendimiento de cosechas. Permite a los agricultores registrar sus cultivos y analizar la producción.

## 🌱 Características Principales

- ✍️ **Registro de cultivos** con fecha de siembra y ubicación.
- ⛅️ **Monitoreo de condiciones climáticas** con datos de temperatura, humedad y precipitaciones.
- ⚖️ **Análisis de rendimiento y costos de producción**.

## 📚 Tecnologías Utilizadas

- **Frontend**: React.js
- **Backend**: Node.js + Express
- **Base de Datos**: MySQL (SQL)
- **API Clima**: ...
- **API Ubicación**: ...

## 📊 Estructura de la Base de Datos (SQL)

### Tabla `agricultores`

| id | username | password | 
| -- | ------ | -------------- |


### Tabla `cultivos`

| id | nombre | fecha\_siembra | id\_ubicacion | id\_rendimiento |agricultor\_id |
| -- | ------ | -------------- | ------------- | --------------- |--------------- |

### Tabla `ubicaciones`

| id | provincia | latitud | longitud |
| -- | ------ | ------- | -------- |

### Tabla `rendimientos`

| id | rendimiento\_esperado |
| -- | --------------------- |

### Tabla `condiciones_climaticas`

| id | cultivo\_id | fecha | temperatura | humedad | 
| -- | ----------- | ----- | ----------- | ------- |

## 🔄 Automatización

- **Cron Job Diario** para consultar una API meteorológica y actualizar las condiciones climáticas de cada cultivo.

## 🔄 Instalación y Ejecución

```bash
# Clonar el repositorio
git clone https://github.com/...
cd gestion-cultivos

# Instalar dependencias del backend
npm install

# Ejecutar backend
npm run dev

# Instalar dependencias del frontend
cd frontend
npm install

# Ejecutar frontend
cd frontend
npm run dev 
```

## 📢 API Endpoints

- `POST /api/login` → Iniciar sesión
- `GET /api/cultivos` → Lista todos los cultivos
- `POST /api/cultivos` → Agrega un nuevo cultivo
- `GET /api/clima/:id` → Obtiene las condiciones climáticas de un cultivo

## 📈 Futuras Mejoras

- Notficación meteorológicas
- Agregar gráficos de tendencias climáticas.

## 👥 Contribuciones

Las contribuciones son bienvenidas. Haz un **fork** del repositorio y envía un **pull request**.


