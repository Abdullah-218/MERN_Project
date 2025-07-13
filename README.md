# MERN Role-Based Admin Dashboard

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
