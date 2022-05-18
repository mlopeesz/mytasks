import React from 'react';
import Navbar from './subcomponents/Navbar';
import AddTask from './subcomponents/AddTask';
import Tasks from './subcomponents/Tasks';

export default function Main() {
  return (
    <div id="Main" className="h-screen">
      <Navbar />
      <AddTask />
      <Tasks />
    </div>
  );
}
