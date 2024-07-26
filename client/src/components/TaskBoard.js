import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', status: 'Pending' });
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchTasks = async () => {
      if (user) {
        try {
          const { data } = await axios.get('http://localhost:5000/api/tasks');
          setTasks(data);
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      }
    };
    fetchTasks();
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/tasks', newTask);
      setNewTask({ title: '', description: '', status: 'Pending' });
      // Refresh tasks after adding a new one
      const { data } = await axios.get('http://localhost:5000/api/tasks');
      setTasks(data);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div>
      <h2>Task Board</h2>

      {/* Task Creation Form */}
      <form onSubmit={handleSubmit}>
        <h3>Create a New Task</h3>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={newTask.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Status:
          <select
            name="status"
            value={newTask.status}
            onChange={handleInputChange}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        <button type="submit">Add Task</button>
      </form>

      {/* Task List */}
      {tasks.map(task => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <p>Assigned To: {task.user ? task.user.name : 'Unassigned'}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
