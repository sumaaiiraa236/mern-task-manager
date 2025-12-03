# MERN Task Manager — CRUD Demo

A simple, well-documented MERN stack demo that showcases Create, Read, Update, and Delete (CRUD) operations using MongoDB, Express, React, and Node.js. Includes a backend REST API (Postman collection included), a React frontend, and a CSV seed dataset for easy local testing.

---

## Table of contents

- [Features](#features)
- [Project structure](#project-structure)
- [Tech stack](#tech-stack)
- [Quick start](#quick-start)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [API](#api)
- [Postman collection](#postman-collection)
- [Seed dataset (CSV)](#seed-dataset-csv)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Full CRUD for tasks (Create, Read, Update, Delete)
- MongoDB integration with Mongoose
- REST API endpoints (testable via Postman)
- React frontend using functional components + Hooks
- CSV seed script to bootstrap sample data
- Simple, maintainable project layout for learning and demos

---

## Project structure

```
mern-task-manager-demo/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── seed.js
│   ├── server.js
│   ├── package.json
│               
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── App.js
├── postman/
│   └── mern-task-manager-postman.json
├── .gitignore
└── README.md
```

---

## Tech stack

Frontend
- React
- Axios
- CSS3
- Functional components + Hooks
<img width="1877" height="890" alt="frontend ui" src="https://github.com/user-attachments/assets/e60cbaaf-1ac3-43cb-848b-2ea0bf60d079" />

Backend
- Node.js
- Express
- Mongoose
- MongoDB
<img width="1690" height="903" alt="deleted" src="https://github.com/user-attachments/assets/6487b458-166f-47f0-8db1-27700b85e389" />
<img width="518" height="126" alt="backend running" src="https://github.com/user-attachments/assets/0cbd847c-878a-41f7-9504-f5a4348ac4bd" />

---

## Quick start

Prerequisites: Node.js (v14+ recommended), npm or yarn, and MongoDB.

1. Clone the repo
```bash
git clone https://github.com/sumaaiiraa236/mern-task-manager.git
cd mern-task-manager
```

### Backend

```bash
cd backend
npm install
```

Create `.env` in `backend/` (or copy `.env.example`) and set:

```
MONGODB_URI=mongodb://localhost:27017/tasksmanager
PORT=5000
```

Seed the database from the CSV (if `seed.js` exists and reads the CSV):

```bash
# from backend/
node seed.js
```

Start the backend:

```bash
npm run dev    # if using nodemon
# or
node server.js
```

Backend default URL: http://localhost:5000

### Frontend

```bash
cd ../frontend
npm install
npm start
```

Frontend default URL: http://localhost:3000

---

## API

Base URL: `http://localhost:5000/api/tasks`

| Method | Endpoint           | Description               |
|--------|--------------------|---------------------------|
| GET    | /api/tasks         | Get all tasks             |
| GET    | /api/tasks/:id     | Get a single task by id   |
| POST   | /api/tasks         | Create a new task         |
| PUT    | /api/tasks/:id     | Update a task             |
| DELETE | /api/tasks/:id     | Delete a task             |

Example: Create a task (POST /api/tasks)
```json
{
  "title": "Buy groceries",
  "description": "Milk, Eggs, Bread",
  "status": "pending",
  "priority": "medium",
  "dueDate": "2025-01-20"
}
```

---

## Postman collection

Import the provided collection:

```
/postman/mern-task-manager-postman.json
```


<img width="1740" height="836" alt="POST" src="https://github.com/user-attachments/assets/aacf76f5-5b32-43b7-9f96-80a24e7d0cc8" />
<img width="1808" height="938" alt="GET" src="https://github.com/user-attachments/assets/bb3e54d9-321f-40b1-943d-3810810f2ed7" />

---

## Seed dataset (CSV)

Sample CSV used by the seed script:

```
title,description,status,priority,dueDate
Buy groceries,"Milk, Eggs, Bread",pending,medium,2025-01-20
Finish MERN project,"Complete frontend + backend",in-progress,high,2025-01-25
Gym workout,"Leg day session",completed,low,2025-01-10
Read book,"Finish 30 pages",pending,low,2025-01-22
Pay bills,"Electricity + Internet",pending,high,2025-01-18
```



## Contributing

Contributions are welcome. To contribute:
1. Fork the repo
2. Create a feature branch (git checkout -b feature/xyz)
3. Commit your changes
4. Open a PR with a clear description of your changes

