import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import api from './services/api';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await api.getAllTasks();

      if (result && Array.isArray(result.data)) {
        setTasks(result.data); // FIX HERE
      } else {
        setTasks([]);
        console.error("Unexpected API format:", result);
      }
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setError("Failed to fetch tasks.");
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (taskData) => {
    setError(null);
    try {
      const created = await api.createTask(taskData);
      setTasks(prev => [created, ...prev]);
    } catch (err) {
      console.error("Error creating task:", err);
      setError("Failed to create task.");
    }
  };

  const handleUpdateTask = async (taskData) => {
    if (!editingTask) return;
    setError(null);

    try {
      const updated = await api.updateTask(editingTask._id, taskData);
      setTasks(prev => prev.map(t => (t._id === updated._id ? updated : t)));
      setEditingTask(null);
    } catch (err) {
      console.error("Error updating task:", err);
      setError(err?.response?.data?.error || "Failed to update task.");
    }
  };

  const handleDeleteTask = async (id) => {
    console.log("Delete requested for id:", id);

    if (!id) {
      setError("Invalid ID.");
      return;
    }

    if (!window.confirm("Delete this task?")) return;

    try {
      await api.deleteTask(id);
      setTasks(prev => prev.filter(t => t._id !== id));
    } catch (err) {
      console.error("Error deleting task:", err);
      setError(err?.response?.data?.error || "Failed to delete task.");
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>📝 MERN Task Manager</h1>
        <p>A simple CRUD app using MongoDB + Express + React + Node</p>
      </header>

      <main className="app-main">
        <TaskForm
          onSubmit={editingTask ? handleUpdateTask : handleCreateTask}
          editingTask={editingTask}
          onCancel={() => setEditingTask(null)}
        />

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading">Loading tasks...</div>
        ) : (
          <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDeleteTask} />
        )}
      </main>

      <footer className="app-footer">MERN Stack Project © 2025</footer>
    </div>
  );
}

export default App;
