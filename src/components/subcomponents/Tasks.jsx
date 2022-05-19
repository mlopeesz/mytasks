import React, { useContext } from 'react';
import trashIcon from '../../assets/trash.svg';
import MyTasksContext from '../../context/MyTasksContext';

export default function Tasks() {
  const { tasks, setTasks } = useContext(MyTasksContext);

  function removeItem(event) {
    const id = Number(event.target.getAttribute('id'));
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    tasks.map((task) => (
      <div key={task.id} className="flex justify-start gap-4 my-4 max-w-[65%] mx-auto">
        <div className="flex gap-4 items-center">
          <button onClick={removeItem} className="w-8 transition hover:scale-110" type="button">
            <img id={task.id} src={trashIcon} alt="Delete Button" />
          </button>
          <input className="form-check-input h-4 w-4 border rounded-sm focus:outline-none transition duration-300 align-center cursor-pointer" type="checkbox" />
        </div>
        <ul>
          <li className="text-[24px] place-self-start">{task.name}</li>
        </ul>
      </div>
    ))
  );
}
