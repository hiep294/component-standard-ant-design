import React from 'react';
import SortArrowsController from '../components/SortArrowsController';

const HomePage = () => {
  return (
    <div style={{ margin: '40px', border: '2px solid #333', padding: '20px' }}>
      <h1>Homepage</h1>
      <div>
        Description: to achive 60% - 70%, then it will be based on custom
      </div>
      <p>
        Some small pieces, each piece does not mean any thing but it is simple
        enough and standard based code to review code and reuse
      </p>
      <SortArrowsController />
    </div>
  );
};

export default HomePage;
