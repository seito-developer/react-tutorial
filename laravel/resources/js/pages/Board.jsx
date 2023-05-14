import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTasklists } from '../api';
import AddTasklist from '../components/AddTasklist';
import Tasklist from '../components/Tasklist/Tasklist';

const Boards = () => {
    const { state } = useLocation();
    const [boardId, setBoardId] = useState([]);
    const [error, setError] = useState("");
    const [tasklists, setTasklists] = useState([]);

    const fetchTasklsts = async () => {
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
            fetchTasklsts();
            console.log('tasklists:', tasklists)
        }
    }, [boardId]);

    return (
        <div>
            <h1>Boards</h1>
            <Tasklist tasklists={tasklists} error={error} boardId={state.boardId} />
        </div>
    );
}

export default Boards;