function NotesList({ notes, toggleImportance }) {
  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>
          {note.content}
          <button onClick={() => toggleImportance(note.id)}>
            {note.important ? "Important" : "Not Important"}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default NotesList