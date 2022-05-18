import React, { useState } from 'react';
import Home from './components/Home';
import Main from './components/Main';
import MyTasksContext from './context/MyTasksContext';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App bg-light-palette">
      <MyTasksContext.Provider value={{ tasks, setTasks }}>
        <Home />
        <Main />
      </MyTasksContext.Provider>
    </div>
  );
}

export default App;
