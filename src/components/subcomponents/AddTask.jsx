import React, { useState, useContext } from 'react';
import MyTasksContext from '../../context/MyTasksContext';

export default function AddTask() {
  const { tasks, setTasks } = useContext(MyTasksContext);
  const [taskInput, setTaskInput] = useState('');

  function handleChange(event) {
    setTaskInput(event.target.value);
  }

  function handleClick() {
    setTasks([...tasks, { id: Math.random(), name: taskInput }]);
    setTaskInput('');
  }

  return (
    <div className="flex justify-center m-10">
      <button
        type="button"
        className="bg-purple-palette hover:bg-purple-hover-palette rounded-full px-3 mx-2 text-white text-[24px] transition duration-300"
      >
        +
      </button>
      <button
        type="button"
        className="text-purple-palette hover:text-purple-hover-palette text-[24px] font-bold transition duration-300"
        onClick={handleClick}
      >
        Add New Task
      </button>
      <input onChange={handleChange} value={taskInput} type="text" />
    </div>
  );
}
