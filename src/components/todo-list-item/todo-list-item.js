import React from 'react';

import './todo-list-item.scss';

const TodoListItem = ({ important, done,
  label, tags = [], onToggleImportant, onToggleDone, onDelete, onAddTags }) => {

  let classNames = 'todo-list-item';
  if (important) {
    classNames += ' important';
  }

  if (done) {
    classNames += ' done';
  }

  console.log(tags)
  if (tags.length === 0) {
    let result = label.split(/(#\w+)/g)
    for (let i = 1; i < result.length; i += 2) {

      tags.push(result[i])
      console.log(tags)

    }
  }
  return (

    <span className={classNames}>

      <span className="todo-list-item-label" onClick={onToggleDone}>{label}</span><span style={{ color: 'red' }} onClick={onAddTags}>&nbsp;&nbsp;&nbsp;{tags}</span><button type="button"
        className='btn btn-outline-info btn-sm float-right'
        title='edit'
        onClick={onAddTags}
      >
        <i className="fa fa-edit" ></i>
      </button>

      <button type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDelete}
        title='delete'>
        <i className="fa fa-trash-o" ></i>
      </button>

    </span>
  );
};

export default TodoListItem;
