import React, { useState } from 'react';

const AddTodo = ({ handleTask }) => {
  const [task, setTask] = useState('');

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    const newTask = {
      task,
      status: false,
      id: Date.now(),
    };

    handleTask(newTask);
    setTask('');
  };

  return (
    <div>
      <input value={task} onChange={handleInput} type='text' />
      <button onClick={handleAdd}>add task</button>
    </div>
  );
};

export default AddTodo;
