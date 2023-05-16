import React, { useState } from 'react';
import { createBoard } from '../api';

const AddBoard = ({ onBoardAdded }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title) {
      const newBoard = await createBoard(title);
      onBoardAdded(newBoard);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new board"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddBoard;