import React, { useState, useEffect, Component } from 'react';
import { getBoards } from '../../api';
import { Link } from 'react-router-dom';
import "./Board.scss";

const Board = (props) => {

  const renderBoards = () => {
    
    if(props.boards){
      return props.boards.map(item => {
        return (
          <Link to={"/board"}
            state={{ boardId: item.id }}
            key={item.id} href="#" className="board">
              <h2 className="board__title">
                {item.title}
              </h2>
              {/* <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
          </Link>
        )
      })
    } else {
      return <div>{props.error}</div>
    }
  }
  
  return (
    <div>
      {renderBoards()}
    </div>
  );
}

export default Board;