import React from 'react';

import './TodoList.css';
import Task from '../Task/Task';

function TodoList({ setTasks, tasksData, onChangeComplete, onDeleteTask }: any) {
  const onEditTask = (id: number) => {
    setTasks(tasksData.map((task: any) => (task.id === id ? { ...task, isEditing: true } : task)));
  };

  const onUpdateDescription = (id: number, description: string) => {
    setTasks(tasksData.map((task: any) => (task.id === id ? { ...task, description, isEditing: false } : task)));
  };

  const elements = tasksData.map((task: any) => {
    return (
      <Task
        key={task.id}
        task={task}
        onEditTask={onEditTask}
        onUpdateDescription={onUpdateDescription}
        onDeleteTask={onDeleteTask}
        onChangeComplete={onChangeComplete}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
}

export default TodoList;
