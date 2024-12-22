import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/dashboard';
import ProjectList from './components/ProjectList';
import TaskProgress from './components/TaskProgress';
import TotalScore from './components/TotalScore';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/tasks" element={<TaskProgress />} />
            <Route path="/score" element={<TotalScore />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

