import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: '130px', textAlign: 'center' }}>
        <h1>Welcome to STEM Learning</h1>
        <p>Explore resources, programs, and opportunities!</p>
      </main>
    </div>
  );
};

export default Home;
