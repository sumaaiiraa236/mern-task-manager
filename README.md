# MERN Task Manager with Machine Learning Integration

A full-stack **MERN (MongoDB, Express, React, Node.js)** Task Manager application that demonstrates **CRUD operations** and includes a **Machine Learning microservice** for automatic task categorization using **K-Means clustering**.

This project is designed as a clean learning demo showcasing full-stack development, REST APIs, database integration, and backend–ML communication.

---

## 📑 Table of Contents

- Features
- Tech Stack
- Project Structure
- Machine Learning Overview
- Quick Start
  - Backend
  - Frontend
  - Machine Learning Service
- API Reference
- Seed Data
- Error Handling
- Future Improvements
- Contributing

---

## 🚀 Features

### Core Application
- Create, Read, Update, Delete (CRUD) tasks
- Task fields:
  - Title
  - Description
  - Status
  - Priority
  - Due Date
- RESTful API built with Express
- MongoDB with Mongoose validation
- React frontend using functional components and hooks
- Axios-based API communication

### Machine Learning Integration
- Automatic task categorization using **K-Means clustering**
- Clustering based on:
  - Priority (numerically encoded)
  - Estimated time
  - Task complexity
- ML implemented in **Python (scikit-learn)**
- ML runs as a **Flask microservice**
- Backend communicates with ML service via HTTP
- Defensive backend: tasks are created even if ML service is offline

---

## 🛠 Tech Stack

### Frontend
- React
- Axios
- CSS
- Functional components + Hooks

### Backend
- Node.js
- Express
- MongoDB
- Mongoose

### Machine Learning
- Python
- scikit-learn
- Pandas
- Flask

---

## 📂 Project Structure

mern-task-manager/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── config/
│ ├── synthetic_data/
│ ├── seed.js
│ └── server.js
│
├── frontend/
│ ├── src/
│ └── public/
│
└── ml-service/
├── data/
├── app.py
├── prepare_data.py
└── train_model.py

yaml
Copy code

---

## 🧠 Machine Learning Overview

### Architecture

React Frontend
↓
Node.js / Express API
↓
Flask ML Microservice
↓
K-Means Model (scikit-learn)

yaml
Copy code

### ML Details
- Algorithm: K-Means Clustering
- Learning Type: Unsupervised
- Output: Cluster ID stored with each task
- Training Data: Synthetic task dataset

---

## ⚙️ Quick Start

### Prerequisites
- Node.js (v14+)
- npm
- MongoDB
- Python 3.8+

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sumaaiiraa236/mern-task-manager.git
cd mern-task-manager
2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
Create a .env file in backend/:

ini
Copy code
MONGODB_URI=mongodb://localhost:27017/tasksmanager
PORT=5000
(Optional) Seed database:

bash
Copy code
node seed.js
Start backend:

bash
Copy code
npm start
Backend runs at:

arduino
Copy code
http://localhost:5000
3️⃣ Frontend Setup
bash
Copy code
cd frontend
npm install
npm start
Frontend runs at:

arduino
Copy code
http://localhost:3000
4️⃣ Machine Learning Service Setup
bash
Copy code
cd ml-service
python -m venv venv
Activate virtual environment:

Windows

bash
Copy code
venv\Scripts\activate
Mac / Linux

bash
Copy code
source venv/bin/activate
Install dependencies:

bash
Copy code
pip install flask pandas scikit-learn joblib
Prepare data:

bash
Copy code
python prepare_data.py
Train model:

bash
Copy code
python train_model.py
Run ML service:

bash
Copy code
python app.py
ML service runs at:

arduino
Copy code
http://localhost:5001
📡 API Reference
Base URL:

bash
Copy code
http://localhost:5000/api/tasks
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
GET	/api/tasks/:id	Get task by ID
POST	/api/tasks	Create task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task

Example: Create Task
json
Copy code
{
  "title": "Buy groceries",
  "description": "Milk, Eggs, Bread",
  "status": "pending",
  "priority": "medium",
  "dueDate": "2025-01-20"
}
🌱 Seed Data (CSV)
Sample seed format:

lua
Copy code
title,description,status,priority,dueDate
Buy groceries,"Milk, Eggs, Bread",pending,medium,2025-01-20
Finish MERN project,"Complete frontend + backend",in-progress,high,2025-01-25
Gym workout,"Leg day session",completed,low,2025-01-10
🛡 Error Handling & Reliability
Backend handles ML service downtime gracefully

Task creation does not fail if ML is offline

MongoDB schema validation enforced

Safe defaults prevent runtime crashes

📌 Future Improvements
Priority recommendation model

Cluster labels in UI

Automated ML retraining

Dockerized deployment

🤝 Contributing
Fork the repository

Create a feature branch

Commit your changes

Open a Pull Request

👤 Author
Built as a full-stack MERN + Machine Learning learning project.

yaml
Copy code

---

## ✅ What to do now

```bash
git add README.md
git commit -m "Merge CRUD and ML documentation into unified README"
git push