import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.scss';

const TodoList = ({ items, onToggleImportant, onToggleDone, onDelete, onAddTags }) => {

  const elements = items.map((item) => {
    const { id, ...itemProps } = item;
    console.log(item)
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          { ...itemProps }
          onAddTags={() => onAddTags(id)}
          onToggleImportant={ () => onToggleImportant(id) }
          onToggleDone={ () => onToggleDone(id) }
          onDelete={ () => onDelete(id) } />
      </li>
    );
  });

  return (<ul className="todo-list list-group">{ elements }</ul>);
};

export default TodoList;
