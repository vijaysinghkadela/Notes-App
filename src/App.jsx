import React, { useState, useEffect } from "react";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (title && content) {
      setNotes([...notes, { title, content }]);
      setTitle("");
      setContent("");
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Notes App</h2>

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg mb-6">
        <input
          type="text"
          placeholder="Title"
          className="w-full border border-gray-300 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your note here..."
          className="w-full border border-gray-300 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          onClick={addNote}
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-medium hover:bg-blue-600 transition"
        >
          Add Note
        </button>
      </div>

      <input
        type="text"
        placeholder="Search notes..."
        className="w-full max-w-md border border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="w-full max-w-md">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <Note key={index} note={note} onDelete={() => deleteNote(index)} />
          ))
        ) : (
          <p className="text-center text-gray-500">No notes found</p>
        )}
      </div>
    </div>
  );
};

export default App;
