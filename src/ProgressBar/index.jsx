import React, { useState } from 'react';
import './ProgressBar.css';

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleIncrease = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const handleDecrease = () => {
    setProgress((prev) => Math.max(prev - 10, 0));
  };

  return (
    <div className="progress-container">
      <h2 className="progress-title">Progress Bar</h2>
      <div className="progress-bar">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="progress-buttons">
        <button className="progress-button" onClick={handleIncrease}>
          Increase
        </button>
        <button className="progress-button" onClick={handleDecrease}>
          Decrease
        </button>
      </div>
      <p className="progress-text">{progress}%</p>
    </div>
  );
}

export default ProgressBar;
