# 🧠 Product Feedback API

API REST desarrollada con **Node.js**, **Express**, **Prisma** y **MySQL** para registrar productos y permitir a los usuarios sugerir mejoras y votar sugerencias, **sin autenticación**.

---

## 📦 Tecnologías

- Node.js
- Express
- Prisma ORM
- MySQL
- Zod (validación)
- Swagger (documentación)

---

## 📁 Estructura del proyecto
```yaml
product-feedback-api/
├── src/
│ ├── modules/
│ │ ├── product/
│ │ ├── suggestion/
│ │ └── vote/
│ ├── shared/
│ ├── config/
│ ├── app.js
│ └── main.js
├── prisma/
│ └── schema.prisma
├── .env
├── package.json
└── README.md
```

## 🧩 Modelos de datos

```prisma

model Product {
  id          Int           @id @default(autoincrement())
  name        String
  description String
  suggestions Suggestion[]
}

model Suggestion {
  id         Int       @id @default(autoincrement())
  text       String
  createdAt  DateTime  @default(now())
  product    Product   @relation(fields: [productId], references: [id])
  productId  Int
  votes      Vote[]
}

model Vote {
  id           Int         @id @default(autoincrement())
  value        Int         // -1 o +1
  suggestion   Suggestion  @relation(fields: [suggestionId], references: [id])
  suggestionId Int
}

```

## 📬 Endpoints principales

##### Productos
```yaml
GET /products

GET /products/suggestion

GET /products/suggestion/vote

POST /products

```

##### Sugerencias

```yaml
GET /suggestions

POST /suggestions
```

##### Votos
```yaml
POST /votes

GET /votes/:suggestionId

GET /count/:suggestionId
```

### ✅ Estado del proyecto
✔️ Funcionalidad completa
🔜 Posible mejora: autenticación, rate-limiting, cache con Redis


## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone repo
cd product-feedback-api
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

### 5. Iniciar el servidor
```bash
npm run dev

Servidor por defecto
http://localhost:3000
```

## 📘 Documentación Swagger

### 📍 Acceso
```bash
http://localhost:3000/api-docs
```