import React, { useState, useEffect, Component } from 'react';
import { getBoards } from '../api';

const BoardList = () => {
  const [boards, setBoards] = useState([]); // ここで初期化
  
  useEffect(() => {
    const componentDidMount = async () => {
      const boards = await getBoards();
      return boards;
    }
    setBoards(componentDidMount())
  }, [])
  
  return (
    <div>
      {boards?.map(board => (
        <div key={board.id}>{board.title}</div>
      ))}
    </div>
  );
}

export default BoardList;