import React, { useContext } from 'react';
import trashIcon from '../../assets/trash.svg';
import MyTasksContext from '../../context/MyTasksContext';

export default function Tasks() {
  const { tasks } = useContext(MyTasksContext);

  return (
    tasks.map((task) => (
      <div key={task.id} className="flex justify-center gap-4">
        <div className="flex gap-2 items-center">
          <img className="w-10" src={trashIcon} alt="Trash Icon" />
          <input className="" type="checkbox" />
        </div>
        <p className="text-[24px]">{task.name}</p>
      </div>
    ))
  );
}
