[![build and push](https://github.com/sahilgarg2606/GitHubActions-Practices/actions/workflows/build-push.yml/badge.svg)](https://github.com/sahilgarg2606/GitHubActions-Practices/actions/workflows/build-push.yml)
# 🚀 Node Task Manager API (No Database)

A production-style Node.js REST API built using Express, designed for DevOps and Docker practice without using any database.

---

## 📌 Features

* RESTful API
* In-memory data storage
* Full CRUD operations
* Middleware (Logger & Error Handling)
* Input validation
* Clean architecture

---

## 🛠 Tech Stack

* Node.js
* Express.js
* UUID
* Dotenv

---

## 📁 Project Structure

```
src/
 ├── controllers/
 ├── routes/
 ├── middleware/
 ├── models/
 ├── utils/
 └── app.js
```

---

## ⚙️ Installation

```bash
git clone <repo>
cd node-task-app
npm install
```

---

## ▶️ Run Locally

```bash
npm run dev
```

---

## 🌐 API Base URL

```
http://localhost:5000
```

---

## 📬 API Endpoints

### Get All Tasks

```
GET /api/tasks
```

### Create Task

```
POST /api/tasks
Body:
{
  "title": "Learn Docker"
}
```

---

## 🐳 Docker (To Be Implemented)

You can containerize this app using Docker by:

* Creating a Dockerfile
* Building an image
* Running a container

---

## ⚙️ CI/CD (To Be Implemented)

Recommended pipeline:

* Install dependencies
* Run tests
* Build Docker image
* Push to Docker Hub

---

## 🎯 Purpose

This project is built for:

* DevOps practice
* Docker learning
* CI/CD pipeline implementation

---

## 👨‍💻 Author

Your Name

---

## 📄 License

MIT
