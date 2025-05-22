import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        className="input"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Нова задача..."
      />
      <button type="submit" className="button">Додати</button>
    </form>
  );
}

export default TodoForm;
