import React from 'react';
import { formatDistanceToNow } from 'date-fns';

type Props = {
  textContent: string;
  created: Date;
  important?: boolean;
  completed?: boolean;
  editing?: boolean;
};

function TodoListItem({ textContent, important = false, completed = false, editing = false, created }: Props) {
  return (
    <li className={(important ? 'important' : '') + (completed ? 'completed' : '')}>
      <div className="view">
        <label>
          <input className="toggle" type="checkbox" checked={completed} />
          <span className="description">{textContent}</span>
          <span className="created">{formatDistanceToNow(created)}</span>
        </label>
        <button type="button" className="icon bi-pencil" />
        <button type="button" className="icon bi-trash" />
      </div>
      {editing && <input type="text" className="edit" value={textContent} />}
    </li>
  );
}

// function TodoListItem({ textContent, important = false }: Props) {
//   const style = {
//     color: important ? 'tomato' : 'inherit',
//   };

//   return <span style={style}>{textContent}</span>;

// }

export default TodoListItem;
