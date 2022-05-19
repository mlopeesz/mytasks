import React, { useContext } from 'react';
import trashIcon from '../../assets/trash.svg';
import MyTasksContext from '../../context/MyTasksContext';

export default function Tasks() {
  const {
    tasks, setTasks, tasksPending, setTasksPending,
  } = useContext(MyTasksContext);

  function removeItem(event) {
    const id = Number(event.target.getAttribute('id'));
    setTasks(tasks.filter((task) => task.id !== id));
    setTasksPending(tasksPending - 1);
  }

  return tasks.map((task) => (
    <div
      key={task.id}
      className="flex justify-start items-center gap-4 my-4 max-w-[65%] mx-auto"
    >
      <div className="flex gap-4 items-center">
        <button
          onClick={removeItem}
          className="w-8 transition hover:scale-110"
          type="button"
        >
          <img id={task.id} src={trashIcon} alt="Delete Button" />
        </button>
      </div>
      <p className="text-[24px] place-self-start">{task.name}</p>
    </div>
  ));
}
