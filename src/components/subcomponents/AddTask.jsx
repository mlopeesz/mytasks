import React from 'react';

export default function AddTask() {
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
        className="text-purple-palette hover:text-purple-hover-palette text-[24px] transition duration-300"
      >
        Add New Task
      </button>
    </div>
  );
}
