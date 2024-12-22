import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';

const TaskProgress = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axiosInstance.get(`/tasks/${projectId}`);
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    if (projectId) {
      fetchTasks();
    }
  }, [projectId]);

  return (
    <div className="task-progress">
      <h3>Task Progress</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <p>{task.name}</p>
            <p>Status: {task.completed ? 'Completed' : 'In Progress'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskProgress;
