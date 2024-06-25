import React from 'react';

import TasksFilter from '../TasksFilter';

type Props = {
  tasksLeft: string;
  clearCompleted: any;
};

function Footer({ tasksLeft, clearCompleted }: Props) {
  return (
    <footer className="footer">
      <span className="todo-count">{tasksLeft} items left</span>
      <ul className="filters">
        <TasksFilter />
      </ul>
      <button type="button" className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
