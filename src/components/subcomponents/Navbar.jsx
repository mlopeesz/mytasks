import React, { useContext } from 'react';
import MyTasksContext from '../../context/MyTasksContext';

export default function Navbar() {
  const { tasksPending } = useContext(MyTasksContext);

  return (
    <nav className="flex justify-around items-center">
      <div className="flex items-center gap-2">
        <img className="w-24" alt="avatar" src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Black&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Light" />
        <div className="text-[24px]">
          <p className="font-bold text-gray-palette">Hi User 👋</p>
          <span className="text-red-palette">
            {tasksPending}
            {' '}
            tasks pending
          </span>
        </div>
      </div>
      <h1 className="font-bold text-[72px] text-gray-palette">MyTasks</h1>
    </nav>
  );
}
