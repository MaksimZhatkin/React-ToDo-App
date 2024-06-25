import React from 'react';

import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import NewTaskForm from './components/NewTaskForm';
import AppFooter from './components/AppFooter';

function App() {
  const todoData = [
    { editing: false, created: new Date(), textContent: 'Some label', important: false, id: 1 },
    { editing: false, created: new Date(), textContent: 'Some label 1', important: false, id: 2 },
    { editing: false, created: new Date(), textContent: 'Some label 2', important: true, id: 3 },
  ];

  return (
    <div>
      <AppHeader />
      <NewTaskForm textContent="" />
      <TodoList todos={todoData} />
      <AppFooter tasksLeft="" clearCompleted={undefined} />
    </div>
  );
}

export default App;
