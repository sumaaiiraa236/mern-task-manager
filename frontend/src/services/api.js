// frontend/src/services/api.js
import axios from 'axios';

const BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000';
const API_URL = `${BASE}/api/tasks`;

const client = axios.create({
  baseURL: BASE,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000
});


const api = {
  getAllTasks: async () => {
    const res = await client.get('/api/tasks');
    return res.data;
  },

  getTask: async (id) => {
    const res = await client.get(`/api/tasks/${id}`);
    return res.data;
  },

  createTask: async (taskData) => {
    const res = await client.post('/api/tasks', taskData);
    return res.data;
  },

  updateTask: async (id, taskData) => {
    const res = await client.put(`/api/tasks/${id}`, taskData);
    return res.data;
  },

  deleteTask: async (id) => {
    const res = await client.delete(`/api/tasks/${id}`);
    return res.data;
  }
};

export default api;
