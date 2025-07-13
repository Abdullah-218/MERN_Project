# MERN Role-Based Service center Admin Dashboard

A full-stack web application built using the **MERN stack (MongoDB, Express, React, Node.js)** that enables **Admins and Managers** to manage **Employees** and their **notes/tasks**, with **role-based access control**, secure APIs, and a responsive user interface.

---

## 🚀 Features

- 🔐 **Authentication & Authorization**
  - JWT-based login with secure access tokens.
  - Role-based protection (`Admin`, `Manager`, `Employee`).
  - Route guards and protected APIs.

- 🧑‍💼 **User Management**
  - Admins/Managers can **create**, **edit**, and **delete** users.
  - Role assignment while creating users.

- 📝 **Notes Management**
  - Create, view, edit, delete notes.
  - Mark notes as completed.
  - Notes are user-assigned and role-restricted.

- 🧰 **Security Features**
  - Rate limiter & login limiter middleware.
  - Input validation and error handling.
  - CORS configuration and logging (request, error, Mongo logs).
  - Token refresh with persistent login support.

- 📁 **Modular Code Structure**
  - Clean separation of **routes**, **controllers**, **middleware**, **models**, and **frontend features**.

---

## 📂 Project Structure

```
E-Commerence Management/
├── backend/
│   ├── config/             # DB and CORS config
│   ├── controllers/        # auth, user, note controllers
│   ├── middleware/         # JWT, error handler, logger
│   ├── models/             # User and Note mongoose schemas
│   ├── routes/             # REST API routes
│   ├── logs/               # Server log files
│   ├── views/              # Static HTML views
│   └── server.js           # Entry point for backend
├── frontend/
│   ├── public/
│   └── src/
│       ├── app/            # Redux store and api slice
│       ├── components/     # Layout, headers, footers
│       ├── config/         # Role config
│       ├── features/       # auth, notes, users
│       └── hooks/          # Custom React hooks
├── .env
├── package.json
└── README.md
```
---

## 🔧 Tech Stack

### Frontend:
- React.js
- Redux Toolkit
- RTK Query
- React Router

### Backend: 
- Node.js
- Express.js
- MongoDB with Mongoose

### Authentication: 
- JWT (Access + Refresh Tokens)
- **Styling**:
- Custom CSS (can be extended to Tailwind/Bootstrap)
  
### Logging:
- Custom request and error logs
  
### Security:
- Rate limiting, CORS, custom middleware

---

## ⚙️ Setup Instructions

### 🔧 Backend Setup

```
cd backend
npm install
```

Add your .env file in the backend/ folder:

```
PORT=3500
MONGO_URI=your_mongodb_uri
ACCESS_TOKEN_SECRET=your_access_token
REFRESH_TOKEN_SECRET=your_refresh_token
```
Run the backend:

```
npm run dev
```

### 🔧 Frontend Setup

```
cd frontend
npm install
npm start
```

## 🔐 Role-Based Access Control

| **Role**   | **Capabilities**                              |
|------------|-----------------------------------------------|
| Admin      | Full access to all users and notes            |
| Manager    | Manage employees and notes                    |
| Employee   | View and update their own assigned notes      |

## 🔐 Authentication & Security

•	JWT tokens issued on login
•	Refresh tokens stored securely and rotated
•	Frontend uses localStorage for token persistence
•	Protected backend routes with role-based middleware
•	Rate limiting, error logging, and custom CORS policies

___


