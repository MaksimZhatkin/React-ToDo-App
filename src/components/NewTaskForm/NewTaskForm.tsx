import React from 'react';

type Props = {
  textContent: string;
  important?: boolean;
};

function TodoListItem({ textContent, important = false }: Props) {
  const style = {
    color: important ? 'tomato' : 'inherit',
  };

  return <span style={style}>{textContent}</span>;
}

export default TodoListItem;
