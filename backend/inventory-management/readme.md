# 📦 Inventory Management API – Alertas de Stock con Node.js, Express y Prisma

Este proyecto es una API REST para gestionar productos en un inventario. Permite operaciones CRUD y alerta automáticamente cuando el stock está por debajo del mínimo configurado. Usa **Node.js**, **Express**, **Prisma** y **MySQL** con una arquitectura modular y patrones como Repository, Observer y Service Layer.

## 🚀 Tecnologías usadas

- Node.js + Express
- Prisma ORM
- MySQL
- Zod (validación)
- Arquitectura modular con patrones:
  - Repository
  - Observer
  - Service Layer

## 📂 Estructura del proyecto
```
inventory-management/
├── prisma/
│ ├── schema.prisma
│ └── seed.js
├── src/
│ ├── config/
│ │ └── prisma.js
│ ├── routes/
│ │ └── productRoutes.js
│ ├── modules/
│ │ └── product/
│ │ ├── controller.js
│ │ ├── service.js
│ │ ├── repository.js
│ │ ├── validator.js
│ │ ├── alertManager.js
│ │ └── observer.js
│ ├── observers/
│ │ └── stockObserver.js
├── .env
├── package.json
├── README.md
└── server.js

```

## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone <repo-url>
cd inventory-management
```

### 2. Instalar dependencias

```bash
npm i
```

### 3. Configurar la base de datos
```js
DATABASE_URL="mysql://usuario:contraseña@localhost:port/database-name"
```

### 4. Crear las tablas en la base de datos
```bash
npx prisma generate
npx prisma db push
```

### 5. Cargar datos en las tablas
```bash
npm run seed
```

### 6. Iniciar el servidor
```bash
npm run dev

Servidor por defecto
http://localhost:3000
```


## 🔍 Endpoints disponibles
```
GET    /api/inventory            → Obtener todos los productos
GET    /api/inventory/:id        → Obtener producto por ID
POST   /api/inventory            → Crear producto
PATCH  /api/inventory/:id/stock/increase → Aumentar stock
PATCH  /api/inventory/:id/stock/decrease → Disminuir stock
GET    /api/inventory/low-stock → Obtener productos con stock bajo
```

## ⚠️ Alertas automáticas
- Cuando el stock de un producto baja por debajo del stockMinimo, el sistema emite una alerta en consola con un mensaje como:

```java
⚠️ Alerta: El producto "Mouse Logitech" tiene stock bajo (2 unidades)
```

## 📐 Patrones aplicados
- **Repository Pattern:** encapsula el acceso a datos en repository.js.

- **Observer Pattern:** se usa para emitir alertas al modificar stock (stockObserver.js, alertManager.js).

- **Service Layer:** lógica de negocio desacoplada del controlador (service.js).


