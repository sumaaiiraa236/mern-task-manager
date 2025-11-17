import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks = [], onEdit = () => {}, onDelete = () => {} }) => {
  if (!tasks || tasks.length === 0) {
    return (
      <section className="task-list-empty" style={{ textAlign: 'center', padding: 20 }}>
        <h3>No tasks yet</h3>
        <p>Create your first task to get started!</p>
      </section>
    );
  }

  return (
    <section className="task-list" aria-label={`Tasks (${tasks.length})`}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>Tasks ({tasks.length})</h3>
      </header>

      <div style={{ marginTop: 12, display: 'grid', gap: 12 }}>
        {tasks.map((task) => (
          <TaskItem
            key={task._id || task.id || JSON.stringify(task)}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
};

export default TaskList;
