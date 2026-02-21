import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [submittedName, setSubmittedName] = useState("")

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmittedName(name)
    setName("")
  }
  
  return (
    <>
       <h2>Simple Controlled Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>

      {submittedName && <h3>Hello, {submittedName} 👋</h3>}
    </>
  )
}

export default App
