import React, { useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  function handleTask(newObj) {
    const newTodos = [...todos];
    newTodos.push(newObj);
    setTodos(newTodos);
  }

  function changeStatus(id) {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });

    setTodos(newTodos);
  }

  return (
    <div>
      <AddTodo handleTask={handleTask} />
      <TodoList changeStatus={changeStatus} todos={todos} />
    </div>
  );
};

export default App;
