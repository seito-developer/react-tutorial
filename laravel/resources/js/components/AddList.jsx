import React, { useState } from 'react';
import { createList } from '../api';

const AddList = ({ boardId, onListAdded }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newList = await createList(boardId, title);
      onListAdded(newList);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new list"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddList;