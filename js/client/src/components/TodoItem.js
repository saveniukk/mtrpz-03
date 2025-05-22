import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={`item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo._id, todo.completed)}
      />
      <span>{todo.title}</span>
      <button
        onClick={() => deleteTodo(todo._id)}
        className="deleteButton"
      >
        🗑️
      </button>
    </li>
  );
}

export default TodoItem;
