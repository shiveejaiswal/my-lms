import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance';

const TotalScore = ({ assignmentId }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const response = await axiosInstance.get(`/progress/${assignmentId}`);
        setScore(response.data.totalScore);
      } catch (error) {
        console.error('Error fetching score:', error);
      }
    };

    if (assignmentId) {
      fetchScore();
    }
  }, [assignmentId]);

  return (
    <div className="total-score">
      <h3>Total Score</h3>
      <p>{score}</p>
    </div>
  );
};

export default TotalScore;
