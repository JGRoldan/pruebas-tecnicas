# 📚 Mini Books DB – Filtros Avanzados con Node.js, Express y Prisma

Este proyecto es una mini base de datos de libros ficticios construida con **Node.js**, **Express**, **Prisma** y **MySQL**. Permite realizar búsquedas avanzadas con filtros, ordenamientos y paginación.

## 🚀 Tecnologías usadas

- Node.js + Express
- Prisma ORM
- MySQL (local)
- Zod (validación)
- Jest (tests)
- Arquitectura modular con patrones:
  - Repository
  - Specification
  - Strategy

---

## 📂 Estructura del proyecto
```
mini-books-db/
├── src/
│   ├── config/
│   │   └── prisma.js
│   ├── shared/
│   │   ├── errors/
│   │   │   └── HttpException.js
│   │   └── middleware/
│   │       └── errorHandler.js
│   ├── modules/
│   │   └── books/
│   │       ├── controllers/
│   │       │   └── book.controller.js
│   │       ├── services/
│   │       │   └── book.service.js
│   │       ├── repositories/
│   │       │   └── book.repository.js
│   │       ├── filters/
│   │       │   └── book.specifications.js
│   │       ├── strategies/
│   │       │   └── sort.strategy.js
│   │       └── routes/
│   │           └── book.routes.js
├── prisma/
│   ├── schema.prisma
│   └── seed.js
├── tests/
│   └── books/
│       └── book.service.test.js
├── .env
├── package.json
├── README.md
└── server.js

```

## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone repo
cd mini-books-db
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


## 🔍 Filtros y ordenamientos soportados

#### Libros
```yaml
GET /api/books
GET /api/books/{id}
POST /api/books
```

#### Filtros

```yaml
GET /api/books?author=Orwell
GET /api/books?genre=Distopía
GET /api/books?minPages=100&maxPages=400
GET /api/books?minYear=1950&maxYear=2020
GET /api/books?minRating=4.5
```

#### Ordenamientos
```yaml
GET /api/books?sort=title&order=asc
GET /api/books?sort=year&order=desc
GET /api/books?sort=rating
```

#### Paginación (limit + offset)
```yaml
GET /api/books?limit=10&offset=20
```


## ✅ Tests
### Ejecutar tests:
```bash
npm run test
```

### Ejecutar tests con cobertura:
```bash
npm run test:coverage
```


## 📐 Patrones aplicados
- **Repository Pattern:** separación de lógica de acceso a datos (book.repository.js)

- **Specification Pattern:** combinación de filtros dinámicos (book.specifications.js)

- **Strategy Pattern:** ordenamientos configurables (sort.strategy.js)


