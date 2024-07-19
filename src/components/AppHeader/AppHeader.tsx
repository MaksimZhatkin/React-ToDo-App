import React from 'react';

import NewTaskForm from '../NewTaskForm';
import './AppHeader.css';

function AppHeader({ createNewTask, setInputText, inputText }: any) {
  return (
    <header className="header">
      <h1>ToDo App 📝</h1>
      <NewTaskForm inputText={inputText} setInputText={setInputText} createNewTask={createNewTask} />
    </header>
  );
}

export default AppHeader;
