
import React, { useState, useEffect } from 'react';

const emptyForm = {
  title: '',
  description: '',
  status: 'pending',
  priority: 'medium',
  dueDate: ''
};

const TaskForm = ({ onSubmit, editingTask, onCancel }) => {
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title ?? '',
        description: editingTask.description ?? '',
        status: editingTask.status ?? 'pending',
        priority: editingTask.priority ?? 'medium',

        dueDate: editingTask.dueDate ? new Date(editingTask.dueDate).toISOString().split('T')[0] : ''
      });
    } else {
      setFormData(emptyForm);
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (formData.dueDate && isNaN(new Date(formData.dueDate).getTime())) {
      alert('Please provide a valid date.');
      return;
    }
    onSubmit({ ...formData });
    if (!editingTask) setFormData(emptyForm);
  };

  return (
    <div>
      <h3>{editingTask ? 'Edit Task' : 'Create New Task'}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title *</label>
          <input name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Description *</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required rows={3} />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Status</label>
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="form-group">
            <label>Priority</label>
            <select name="priority" value={formData.priority} onChange={handleChange}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="form-group">
            <label>Due Date</label>
            <input name="dueDate" type="date" value={formData.dueDate} onChange={handleChange} />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">{editingTask ? 'Update Task' : 'Create Task'}</button>
          {editingTask && <button type="button" className="btn btn-secondary" onClick={() => { onCancel && onCancel(); setFormData(emptyForm); }}>Cancel</button>}
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
