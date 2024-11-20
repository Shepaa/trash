import {useState} from 'react';

export const TaskList = ({ initialTasks }) => {
  const [tasks, setTasks] = useState(initialTasks || []);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks((prevTasks) => [...prevTasks, newTask.trim()]);
    setNewTask('');
  };

  return (
      <div>
        <h1>Task List</h1>
        <ul>
          {tasks.map((task, index) => (
              <li key={index}>{task}</li>
          ))}
        </ul>
        <div>
          <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter a new task"
          />
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
  );
};