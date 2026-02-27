import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import NotesList from "./components/NotesList"
import AddNote from "./components/AddNote"
import { useNotes } from "./hooks/useNotes"

function App() {
  const { notes, addNote, toggleImportance } = useNotes()

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/add"> Add Note</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <NotesList
              notes={notes}
              toggleImportance={toggleImportance}
            />
          }
        />

        <Route
          path="/add"
          element={<AddNote addNote={addNote} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App