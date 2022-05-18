import React from 'react';

export default function Home() {
  return (
    <div
      id="Home"
      className="flex flex-col justify-center items-center h-screen"
    >
      <h1 className="text-gray-palette text-[72px]">MyTasks</h1>
      <p className="text-gray-palette text-[24px]">
        Manage You Task Checklist Easily
      </p>
      <a
        href="!#"
        className="text-white text-[24px] bg-purple-palette hover:bg-purple-hover-palette transition duration-300 rounded px-2 m-4 "
      >
        Lets Start
      </a>
    </div>
  );
}
