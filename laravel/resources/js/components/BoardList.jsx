import React, { useState, useEffect, Component } from 'react';
import { getBoards } from '../api';
import { Link } from 'react-router-dom';

const BoardList = (props) => {

  const renderBoards = () => {
    console.log('boards:', props.boards);
    if(props.boards){
      return props.boards.map(board => {
        return (
          <Link to={"/board"} 
            state={{ boardId: board.id }}
            key={board.id} href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {board.title}
              </h5>
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

export default BoardList;