import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTasklists } from '../api';

const Boards = () => {
    const { state } = useLocation();
    const [boardId, setBoardId] = useState([]);
    const [error, setError] = useState("");
    const [tasklists, setTasklists] = useState([]);

    const fetchLists = async () => {
        try {
            const res = await getTasklists(boardId);
            setTasklists(res);
        } catch (err) {
            setError(err);
        }
    }

    useEffect(() => {
        setBoardId(state.boardId);
    }, [state.boardId]);

    useEffect(() => {
        if (boardId) {
            fetchLists();
            console.log('tasklists:', tasklists)
        }
    }, [boardId]);

    const render = () => {
        if(error) return <div>{`${error}: エラーです`}</div>
        else return <div>{tasklists}</div>
    }
    
    return (
        <div>
            <h1>Boards</h1>
            {render()}
        </div>
    );
}

export default Boards;