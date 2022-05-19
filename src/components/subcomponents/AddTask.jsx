import React, { useState, useContext } from 'react';
import MyTasksContext from '../../context/MyTasksContext';

export default function AddTask() {
  const { tasks, setTasks, setTasksPending } = useContext(MyTasksContext);
  const [taskInput, setTaskInput] = useState('');

  function handleChange(event) {
    setTaskInput(event.target.value);
  }

  function handleClick() {
    if (taskInput) {
      setTasks([...tasks, { id: Math.random(), name: taskInput }]);
      setTaskInput('');
      setTasksPending(tasks.length + 1);
    }
  }

  return (
    <div className="flex justify-center m-10">
      <input
        className="mx-2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-palette focus:outline-none"
        onChange={handleChange}
        value={taskInput}
        type="text"
        placeholder="Clean dog poop"
      />
      <button
        type="button"
        className="bg-purple-palette hover:bg-purple-hover-palette rounded-full px-3 mx-2 text-white text-[24px] transition duration-300"
        onClick={handleClick}
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
    </div>
  );
}
