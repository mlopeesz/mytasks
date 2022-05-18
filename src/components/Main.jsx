import React from 'react';
import Navbar from './subcomponents/Navbar';
import AddTask from './subcomponents/AddTask';

export default function Main() {
  return (
    <div id="Main" className="h-screen">
      <Navbar />
      <AddTask />
    </div>
  );
}
