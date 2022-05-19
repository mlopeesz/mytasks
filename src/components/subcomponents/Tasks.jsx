import React, { useContext } from 'react';
import trashIcon from '../../assets/trash.svg';
import MyTasksContext from '../../context/MyTasksContext';

export default function Tasks() {
  const { tasks } = useContext(MyTasksContext);

  return (
    tasks.map((task) => (
      <div key={task.id} className="flex justify-start gap-4 my-4 max-w-[65%] mx-auto">
        <div className="flex gap-4 items-center">
          <img className="w-8 transition hover:scale-110" src={trashIcon} alt="Trash Icon" />
          <input className="form-check-input h-4 w-4 border rounded-sm focus:outline-none transition duration-300 align-center cursor-pointer" type="checkbox" />
        </div>
        <ul>
          <li className="text-[24px] place-self-start">{task.name}</li>
        </ul>
      </div>
    ))
  );
}
