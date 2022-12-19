import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, changeStatus }) => {
  return (
    <ul className='todolist'>
      {todos.map((item) => (
        <li className={item.status ? 'completed' : ''} key={item.id}>
          <input type='checkbox' onChange={() => changeStatus(item.id)} />
          {item.task}
          <button>&times;</button>
          <button>edit</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
