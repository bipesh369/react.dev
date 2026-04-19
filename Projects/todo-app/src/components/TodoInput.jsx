import React from 'react'
import { useState } from 'react'

const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState("")
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() === "") return

    onAdd(text)
    setText("")
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter todo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default TodoInput