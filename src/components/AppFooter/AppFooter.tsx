import React from 'react';

import TasksFilter from '../TasksFilter';

function Footer({ tasksData, filter, setFilter, setTasks }: any) {
  const clearCompleted = () => {
    setTasks(tasksData.filter((task: any) => !task.isCompleted));
  };

  return (
    <footer className="footer">
      <span className="todo-count">{tasksData.filter((task: any) => !task.isCompleted).length} items left </span>
      <TasksFilter filter={filter} setFilter={setFilter} />
      <button type="button" className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
