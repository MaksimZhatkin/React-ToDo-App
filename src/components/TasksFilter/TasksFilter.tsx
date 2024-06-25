import React from 'react';

function TasksFilter() {
  return (
    <>
      <li>
        <button type="button" className="selected">
          All
        </button>
      </li>
      <li>
        <button type="button">Active</button>
      </li>
      <li>
        <button type="button">Completed</button>
      </li>
    </>
  );
}

export default TasksFilter;
