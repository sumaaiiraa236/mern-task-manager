📝 MERN Task Manager – CRUD Demo

A complete MERN Stack project demonstrating full CRUD operations using MongoDB, Express, React, and Node.js.
Includes backend REST APIs (Postman-testable), a functional React frontend, and CSV-seeded dataset.

🚀 Live Features

✔ Create Tasks
✔ Read Tasks
✔ Update Tasks
✔ Delete Tasks
✔ MongoDB database integration
✔ Fully testable REST API (Postman collection included)
✔ Clean React UI
✔ CSV dataset imported into MongoDB
✔ Professional documentation + Kaggle notebook

📂 Project Structure
mern-task-manager-demo/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── seed.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── App.js
│
├── postman/
│   └── mern-task-manager-postman.json
│
└── README.md

🛠 Tech Stack
Frontend

React

Axios

CSS3

Functional Components + Hooks

Backend

Node.js

Express.js

Mongoose

MongoDB

🖥 Install & Run Locally
Clone Repo
git clone https://github.com/yourusername/mern-task-manager-demo
cd mern-task-manager-demo

🔧 Backend Setup
cd backend
npm install


Create .env file:

MONGODB_URI=mongodb://localhost:27017/mern_tasks
PORT=5000


Start backend:

npm run dev
# or
node server.js

🎨 Frontend Setup
cd frontend
npm install
npm start


This opens React at:

http://localhost:3000

📡 API Documentation

Base URL (local):

http://localhost:5000/api/tasks

Method	Endpoint	Description
GET	/api/tasks	Get all tasks
GET	/api/tasks/:id	Get single task
POST	/api/tasks	Create new task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task
📮 Postman Collection

Included in:

/postman/mern-task-manager-postman.json


Import into Postman and run all CRUD tests.

Screenshots recommended:

GET all

POST create

PUT update

DELETE remove

📊 Dataset (CSV)

Sample CSV used for seeding:

title,description,status,priority,dueDate
Buy groceries,"Milk, Eggs, Bread",pending,medium,2025-01-20
Finish MERN project,"Complete frontend + backend",in-progress,high,2025-01-25
Gym workout,"Leg day session",completed,low,2025-01-10
Read book,"Finish 30 pages",pending,low,2025-01-22
Pay bills,"Electricity + Internet",pending,high,2025-01-18


Seed script:

node seed.js
