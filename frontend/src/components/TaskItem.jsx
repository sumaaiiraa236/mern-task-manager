
import React from 'react';

const TaskItem = ({ task = {}, onEdit = () => {}, onDelete = () => {} }) => {
  const id = task._id || task.id || null;

  return (
    <article className="task-item">
      <header className="task-header">
        <h4 className="task-title">{task.title || 'Untitled'}</h4>
        <div className="task-badges">
          <span className={`badge status-${task.status || 'pending'}`}>{task.status || 'pending'}</span>
          <span className={`badge priority-${task.priority || 'medium'}`}>{task.priority || 'medium'}</span>
        </div>
      </header>

      {task.description && <p className="task-description">{task.description}</p>}
      {task.dueDate && <div className="task-due-date">Due: {new Date(task.dueDate).toLocaleDateString()}</div>}

      <div className="task-actions">
        <button className="btn btn-edit" onClick={() => onEdit(task)}>Edit</button>
        <button
          className="btn btn-delete"
          onClick={() => onDelete(id)}
          aria-disabled={!id}
        >
          Delete
        </button>
      </div>

      <div className="task-meta">Created: {task.createdAt ? new Date(task.createdAt).toLocaleDateString() : '—'}</div>
    </article>


  );
};

export default TaskItem;
