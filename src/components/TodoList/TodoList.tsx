import React from 'react';

import TodoListItem from '../TodoListItem';
import './TodoList.css';

type Props = {
  todos: Array<any>;
};

function TodoList({ todos }: Props) {
  const elements = todos.map((todo) => {
    return (
      <li className="list-group-item todo-list" key={todo.key}>
        <TodoListItem
          editing={todo.editing}
          created={todo.created}
          textContent={todo.textContent}
          important={todo.important}
        />
      </li>
    );
  });

  return <ul className="list-group">{elements}</ul>;
}

export default TodoList;
