import React, {useState} from 'react';
import ToDoItemList from './ToDoItemList.jsx';
import "./TodoList.css"; // CSS Import

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask('');
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  return (
      <div >
        <input
            type = "text"
            value = {task}
            onChange={
              (e) => setTask(e.target.value)
            }
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map((task) => (
              <ToDoItemList
                  key={task.id}
                  task={task}
                  toggleTask={toggleTask}
                  deleteTask={deleteTask}
              />
          ))}
        </ul>
      </div >
  );
};

export default ToDoList;