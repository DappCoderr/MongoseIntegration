# CRM Backend App

A simple and scalable **CRM (Customer Relationship Management)** backend built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**.
It includes secure **JWT authentication**, **bcrypt password hashing**, and **role-based access control** for Admin and Users.

---

## 📁 Project Structure

```
crm-backend/
├── config/
│   └── connectDB.js        # Database connection setup
│
├── controller/
│   ├── auth.controller.js  # Signup & Signin logic
│   └── user.controller.js  # User CRUD operations
│
├── middleWare/
│   ├── verifyUserRequest.mw.js
│   ├── VerifyUserRequest.mw.js
│   ├── adminAuth.mw.js
│   └── ...
│
├── model/
│   └── user.model.js       # Mongoose user schema
│
├── router/
│   ├── api.router.js       # Base route aggregator
│   ├── auth/
│   │   └── auth.router.js
│   └── user/
│       └── user.router.js
│
├── .env                    # Environment variables
├── package.json
└── server.js               # Main entry file
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/<your-username>/crm-backend.git
cd crm-backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in the root directory and add:

```
PORT=7777
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/crm
JWT_SECRET=<your-secret-key>
```

### 4️⃣ Run the server

```bash
node index.js
```

Server will start on: 

```
http://localhost:7777
```

---

## 🧠 Features

✅ User authentication (signup & signin)
✅ JWT-based secure session management
✅ Role-based authorization (Admin, User)
✅ Admin can view and manage all users
✅ Input validation middleware
✅ Modular & maintainable folder structure

---

## 🔐 API Endpoints Overview

| Method   | Endpoint               | Description         | Access     |
| -------- | ---------------------- | ------------------- | ---------- |
| **POST** | `/crm/api/v1/auth/signup` | Register a new user | Public     |
| **POST** | `/crm/api/v1/auth/signin` | Sign in a user      | Public     |
| **GET**  | `/crm/api/v1/users/`       | Get all users       | Admin only |
| **GET**  | `/crm/api/v1/users/:id`   | Get a user by ID    | Admin only |
| **PUT**  | `/crm/api/v1/users/:id`   | Update user details | Admin only |

---

## 🧑‍💻 Author

**dc**
