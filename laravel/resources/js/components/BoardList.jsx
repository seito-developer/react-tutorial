import React, { useState, useEffect, Component } from 'react';
import { getBoards } from '../api';

const BoardList = () => {
  const [boards, setBoards] = useState([]); // ここで初期化
  const [error, setError] = useState(""); // ここで初期化
  const componentDidMount = async () => {
    try {
      const boards = await getBoards();
      setBoards(boards);
    } catch(err) {
      setError(err);
    }
  }

  useEffect(() => {
    componentDidMount();
  }, [])

  const renderBoards = () => {
    if(boards){
      return boards.map(board => {
        return (
          <div key={board.id}>{board.title}</div>
        )
      })
    } else {
      return <div>{error}</div>
    }
  }
  
  return (
    <div>
      {renderBoards()}
    </div>
  );
}

export default BoardList;