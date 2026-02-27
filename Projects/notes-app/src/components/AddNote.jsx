import { useState, useRef, useEffect } from "react"

function AddNote({ addNote }) {
  const [content, setContent] = useState("")
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    addNote(content)
    setContent("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  )
}

export default AddNote