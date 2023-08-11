import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NoteDB from "../noteDB";

function App() {
  return (
    <div>
      <Header />
      {NoteDB.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
