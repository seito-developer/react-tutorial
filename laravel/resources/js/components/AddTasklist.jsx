import React, { useState } from 'react';
import { createTasklist } from '../api';

const AddTasklist = ({ boardId, onListAdded }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newList = await createTasklist(boardId, title);
      onListAdded(newList);
      setTitle('');
    }
    console.log('title:', `${title}+${boardId}`);
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

export default AddTasklist;