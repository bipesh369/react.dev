import { useState, useEffect } from "react"
import notesService from "../services/notes"

export function useNotes() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    notesService.getAll().then(initialNotes => {
      setNotes(initialNotes)
    })
  }, [])

  const addNote = async (content) => {
    const newNote = {
      content,
      important: false
    }

    const savedNote = await notesService.create(newNote)
    setNotes(prev => [...prev, savedNote])
  }

  const toggleImportance = async (id) => {
    const note = notes.find(n => n.id === id)
    if (!note) return

    const updatedNote = { ...note, important: !note.important }

    const returnedNote = await notesService.update(id, updatedNote)

    setNotes(prev =>
      prev.map(n => (n.id === id ? returnedNote : n))
    )
  }

  return { notes, addNote, toggleImportance }
}

