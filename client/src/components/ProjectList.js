import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axiosInstance.get('/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="project-list">
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
