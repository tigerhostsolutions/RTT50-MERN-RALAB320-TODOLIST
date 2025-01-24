import React, {useState} from 'react';
import './TodoList.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState(['Review homework', 'Finish project', 'Go to gym']);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks(t => [...t, newTask]);//spread current state of tasks, new tasks
      setNewTask('');
    }
  };

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] =
          [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
      <div >
        <input
            type = "text"
            value = {newTask}
            onChange = {
              (e) => setNewTask(e.target.value)
            }
        />
        <button onClick = {addTask} >Add Task</button >
        <ol >
          {tasks.map((task, index) =>
              <li key = {index} >
                <span className = "text" >{task}</span >
                <button
                    className = "delete-button"
                    onClick = {() => deleteTask(index)} >
                  Delete
                </button >

                <button
                    className = "move-button"
                    onClick = {() => moveTaskUp(index)} >
                  Up
                </button >

                <button
                    className = "move-button"
                    onClick = {() => moveTaskDown(index)} >
                  Down
                </button >
              </li >,
          )}
        </ol >
      </div >
  );
};

export default ToDoList;