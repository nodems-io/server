# NodeMs – Server Management System

NodeMs is a modern, modular server management backend built with **Fastify**, **TypeORM**, and **PostgreSQL**. It provides a scalable architecture with RESTful APIs and WebSocket support for real-time server monitoring, user authentication, and datacenter organization.

---

## 🚀 Features

* 🔐 JWT-based Authentication
* 🧠 Modular structure with services, schemas, and routes
* 📂 Entity-Relationship with PostgreSQL via TypeORM
* 🌐 REST API and WebSocket support (planned)
* 🏷️ Auto-generated API documentation with Swagger
* 📦 Environment-based configuration using `.env`

---

## 📁 Project Structure

```
src/
├── app.ts                   # Fastify app setup
├── server.ts                # Entry point
├── config/
│   └── db.ts                # TypeORM config
├── entities/                # TypeORM models (User, Server, Datacenter)
├── routes/                  # Fastify route handlers
├── services/                # Business logic
├── schemas/                 # Request validation schemas
└── utils/                   # (Optional: helper modules)
```

---

## ⚙️ Tech Stack

* **Node.js**
* **Fastify**
* **TypeORM**
* **PostgreSQL**
* **JWT** for authentication
* **Swagger** for API documentation

---

## ⚙️ Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Create .env file
cp .env.example .env

# 3. Start development server
npx ts-node src/server.ts
```

---

## 🧪 Example `.env`

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=yourpassword
DB_NAME=nodems
JWT_SECRET=supersecretjwt
```

---

## 📌 API Modules

* **Auth**

    * POST `/login`
    * POST `/register`
    * GET `/me`
* **Datacenter**

    * GET `/api/datacenters`
    * POST `/api/datacenters`
    * GET `/api/datacenters/:id`
    * PUT `/api/datacenters/:id`
    * DELETE `/api/datacenters/:id`
* **Server**

    * GET `/api/servers`
    * POST `/api/servers`
    * GET `/api/servers/:id`
    * PUT `/api/servers/:id`
    * DELETE `/api/servers/:id`

---

## 📖 API Documentation

After starting the server, navigate to:

```
http://localhost:8085/swagger
```

Swagger UI is automatically generated using the schema definitions.

---

## 🤩 Coming Soon

* Server status updates via WebSocket
* SSH connection test for each server
* Role-based access control (RBAC)
* Activity logs and monitoring

---

## 🧑‍💻 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
