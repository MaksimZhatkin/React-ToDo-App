// src/App.tsx
import React, { useState } from 'react';

import TodoList from './components/TodoList';
import AppFooter from './components/AppFooter';
import './index.css';
import AppHeader from './components/AppHeader';

function App() {
  const [tasks, setTasks] = useState([
    { id: 0, description: 'Completed task', isCompleted: true, isEditing: false, created: new Date() },
    { id: 1, description: 'Editing task', isCompleted: false, isEditing: false, created: new Date() },
  ]);

  const [inputText, setInputText] = useState('');

  const [filter, setFilter] = useState('All');

  const onChangeComplete = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)));
  };

  const onDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const createNewTask = (description: string) => {
    setTasks([
      ...tasks,
      { id: tasks.length + 100, description, isCompleted: false, isEditing: false, created: new Date() },
    ]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Active') return !task.isCompleted;
    if (filter === 'Completed') return task.isCompleted;
    return true;
  });

  return (
    <section className="todoapp">
      <AppHeader createNewTask={createNewTask} setInputText={setInputText} inputText={inputText} />
      <section className="main">
        <TodoList
          setTasks={setTasks}
          tasksData={filteredTasks}
          onChangeComplete={onChangeComplete}
          onDeleteTask={onDeleteTask}
        />
        <AppFooter tasksData={tasks} filter={filter} setFilter={setFilter} setTasks={setTasks} />
      </section>
    </section>
  );
}

export default App;
