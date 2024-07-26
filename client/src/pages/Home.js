import React from 'react';
import TaskBoard from '../components/TaskBoard';
import ReleaseForm from '../components/ReleaseForm';

const Home = () => {
  return (
    <div>
      <h1>Release Management</h1>
      <TaskBoard />
      <ReleaseForm />
    </div>
  );
};

export default Home;
