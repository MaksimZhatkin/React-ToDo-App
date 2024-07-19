import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

function Task({ task, onChangeComplete, onEditTask, onUpdateDescription, onDeleteTask }: any) {
  const [description, setDescription] = useState(task.description);

  const myTrim = (word: string) => {
    word.trim();
    return word.replace(/ +(?= )/g, '');
  };

  const handleSubmit = (newDescription: any) => {
    const result = myTrim(newDescription);
    if (result === '') {
      return null;
    }
    onUpdateDescription(task.id, result);
    setDescription(result);
  };

  const taskClass = `${task.isCompleted ? 'completed' : ''} ${task.isEditing ? 'editing' : ''} `;

  return (
    <li className={taskClass}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onChangeComplete(task.id)}
        />
        <label>
          <span className="description">{task.description}</span>
          <span className="created">{formatDistanceToNow(task.created)}</span>
        </label>
        <button type="button" className="icon icon-edit" onClick={() => onEditTask(task.id)} />
        <button type="button" className="icon icon-destroy" onClick={() => onDeleteTask(task.id)} />
      </div>
      {task.isEditing && (
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(description);
          }}
        >
          <input
            required
            type="text"
            className="edit"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            onBlur={(e) => {
              if (myTrim(description) === '') {
                e.target.focus();
              }
              handleSubmit(description);
            }}
            autoFocus
          />
        </form>
      )}
    </li>
  );
}

export default Task;
