MERN Task Manager – CRUD Demo

A complete MERN Stack project demonstrating full CRUD operations using MongoDB, Express, React, and Node.js. Includes backend REST APIs (Postman-testable), a functional React frontend, and CSV-seeded dataset.

Live Features

Create Tasks

Read Tasks

Update Tasks

Delete Tasks

MongoDB database integration

Fully testable REST API (Postman collection included)

Clean React UI

CSV dataset imported into MongoDB

Project Structure
mern-task-manager-demo/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── seed.js
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── .env                # local only — DO NOT commit
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── App.js
├── postman/
│   └── mern-task-manager-postman.json
├── .gitignore
└── README.md


Note: Keep your real secrets in backend/.env (this file should be ignored by git).

Tech Stack

Frontend

React (functional components + hooks)

Axios

CSS3

Backend

Node.js

Express.js

Mongoose

MongoDB

Install & Run Locally
Clone repo
git clone https://github.com/yourusername/mern-task-manager-demo.git
cd mern-task-manager-demo

Backend Setup
cd backend
npm install


Create backend/.env (do not commit). Use .env.example as reference:

MONGODB_URI=mongodb://localhost:27017/mern_tasks
PORT=5000


Start backend (development):

# from backend/
npm run dev
# or
node server.js

Frontend Setup
cd ../frontend
npm install
npm start


Open the React app at: http://localhost:3000

API Documentation

Base URL (local):

http://localhost:5000/api/tasks

Method	Endpoint	Description
GET	/api/tasks	Get all tasks
GET	/api/tasks/:id	Get single task
POST	/api/tasks	Create new task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task
Postman Collection

Import /postman/mern-task-manager-postman.json into Postman and run the CRUD tests.

Dataset (CSV)

Sample CSV used for seeding (backend/seed.js reads a CSV):

title,description,status,priority,dueDate
Buy groceries,"Milk, Eggs, Bread",pending,medium,2025-01-20
Finish MERN project,"Complete frontend + backend",in-progress,high,2025-01-25
Gym workout,"Leg day session",completed,low,2025-01-10
Read book,"Finish 30 pages",pending,low,2025-01-22
Pay bills,"Electricity + Internet",pending,high,2025-01-18


Seed script:

# from backend/
node seed.js

# or from repo root
node backend/seed.js


Make sure backend/.env and MONGODB_URI are configured before running the seed.

.gitignore (recommended)

Add this to repo root .gitignore:

# Node
node_modules/
npm-debug.log
yarn-error.log

# Env files
backend/.env
frontend/.env

# Logs
logs
*.log

# OS files
.DS_Store
Thumbs.db

# IDEs
.vscode/
.idea/

# Build
dist/
build/
