import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTasklists } from '../api';
import AddTasklist from '../components/AddTasklist';

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
        if(tasklists){
            return (
                <ul>
                    {tasklists.map(tasklist => (
                        <li key={tasklist.id}>
                            <h2>{tasklist.title}</h2>
                        </li>
                    ))}
                </ul>
            )
        } else {
            return <div>{`${error}: エラーです`}</div>
        }
    }
    
    return (
        <div>
            <h1>Boards</h1>
            {render()}
            <AddTasklist boardId={state.boardId} />
        </div>
    );
}

export default Boards;