import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const Boards = () => {
    const { state } = useLocation()
    const [boardId, setBoardId] = useState([])

    useEffect(() => {
        setBoardId(state.boardId)
    }, [])
    
    return (
        <div>
            <h1>Boards</h1>
            {boardId}
        </div>
    );
}

export default Boards;