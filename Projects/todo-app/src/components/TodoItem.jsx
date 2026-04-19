import React from 'react'

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div>
      <span 
      onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
      >
      {todo.text}
    </span>

    <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem