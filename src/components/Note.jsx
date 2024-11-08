import React from 'react';

const Note = ({ note, onDelete }) => {
  return (
    <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md mb-4 hover:shadow-lg transition">
      <h3 className="font-semibold text-lg text-gray-800">{note.title}</h3>
      <p className="text-gray-700 mt-2">{note.content}</p>
      <button
        onClick={onDelete}
        className="text-red-500 mt-3 text-sm hover:underline"
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
