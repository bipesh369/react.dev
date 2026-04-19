import React from 'react'


const TodoList = ({ todos, onDelete, onTogle}) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem 
        key={todo.id} 
        todo={todo} 
        onDelete={onDelete} 
        onToggle={onToggle} 
        />
        ))}
    </div>
  )
}

export default TodoList