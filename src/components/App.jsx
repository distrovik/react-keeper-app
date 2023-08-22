import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NewNote from "./NewNote";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prev) => {
      return [...prev, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prev) => {
      return prev.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <NewNote onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
export default App;
