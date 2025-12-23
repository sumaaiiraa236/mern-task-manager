import express from 'express';
import axios from 'axios';
import Task from '../models/Task.js';

const router = express.Router();

/* GET all tasks */
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: tasks.length,
      data: tasks
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

/* GET task by id */
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }

    res.json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
});

/* CREATE task + ML cluster */
router.post("/", async (req, res) => {
  try {
    const { title, priority,description } = req.body;

    // SAFETY DEFAULTS
    const estimatedTime = Number(req.body.estimatedTime ?? 2);
    const complexity = Number(req.body.complexity ?? 2);

    const priorityMap = {
      low: 1,
      medium: 2,
      high: 3,
      critical: 4
    };

    const priorityScore = priorityMap[priority] || 2;

    let cluster = null;

    // CALL ML SERVICE SAFELY
    try {
      const mlResponse = await axios.post("http://127.0.0.1:5001/cluster", {
        priority: priorityScore,
        estimatedTime,
        complexity
      });
      cluster = mlResponse.data.cluster;
    } catch (mlErr) {
      console.error("⚠️ ML service failed:", mlErr.message);
    }

    const task = await Task.create({
      title,
      description,
      priority,
      estimatedTime,
      complexity,
      cluster
    });

    res.status(201).json(task);

  } catch (err) {
    console.error("❌ Task creation failed:", err);
    res.status(500).json({ message: err.message });
  }
});


/* UPDATE task */
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }

    res.json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Update failed',
      error: error.message
    });
  }
});

/* DELETE task */
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }

    res.json({
      success: true,
      message: 'Task deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Delete failed',
      error: error.message
    });
  }
});

export default router;
