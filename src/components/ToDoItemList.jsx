import React from 'react';
import './ToDoItem.css';

const ToDoItem = ({task, toggleTask, deleteTask}) => {
  const {id, text, completed} = task;

  return(
      <li className={`todo-item ${completed && 'completed'}`}>
        <span
            className={completed ? 'completed' : ''}
            onClick={() => toggleTask(id)}
        >
          {text}
        </span>
        <button
            className={completed ? 'completed' : ''}
            onClick={() => deleteTask(id)}>
          Delete
        </button>
      </li>
  );
}

export default ToDoItem;