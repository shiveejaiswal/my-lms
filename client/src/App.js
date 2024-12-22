import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import TaskProgress from './components/TaskProgress';
import TotalScore from './components/TotalScore';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/tasks/:projectId" element={<TaskProgress />} />
          <Route path="/score/:assignmentId" element={<TotalScore />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
