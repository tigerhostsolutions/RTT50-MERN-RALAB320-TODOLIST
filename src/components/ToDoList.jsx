import React, {useState} from 'react';
import './TodoList.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState(['Review homework', 'Finish project', 'Go to gym']);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);


  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks(t => [...t, newTask]);//spread current state of tasks, new tasks
      setNewTask('');
    }
  };

  const startUpdateTask = (index) => {
    setEditIndex(index); // Set the index of the task being edited
    setNewTask(tasks[index]); // Populate the input field with the task's current value
  };

  const updateTask = () => {
    if (newTask.trim() !== '' && editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask; // Update the specified task
      setTasks(updatedTasks); // Set the updated tasks in the state
      setNewTask(''); // Clear the input field
      setEditIndex(null); // Exit editing mode
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] =
          [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  const moveTaskDown = (index) => {
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
        {/*<button onClick = {addTask} >Add Task</button >*/}
        <button onClick={editIndex !== null ? updateTask : addTask}>
          {editIndex !== null ? 'Update Task' : 'Add Task'}
        </button>
        <ol >
          {tasks.map((task, index) =>
              <li key = {index} >
                <span className = "text" >{task}</span >
                <button
                    className = "update-button"
                    onClick = {() => startUpdateTask(index)} >
                  Update
                </button >

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