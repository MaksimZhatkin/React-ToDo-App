import React from 'react';

function NewTaskForm({ createNewTask, setInputText, inputText }: any) {
  const onSubmitTask = (e: any) => {
    e.preventDefault();
    const result = inputText.trim();
    if (result !== '') {
      createNewTask(result);
      setInputText('');
    }
    return null;
  };

  return (
    <form onSubmit={onSubmitTask}>
      <input
        name="taskDescription"
        className="new-todo"
        placeholder="What needs to be done?"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
    </form>
  );
}

export default NewTaskForm;
