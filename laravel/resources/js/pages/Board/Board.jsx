import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTasklists } from '../../api';
import AddTasklist from '../../components/AddTasklist';
import Tasklist from '../../components/Tasklist/Tasklist';
import "./Board.scss";
import Layout from '../../components/Layout/Layout';

const Boards = () => {
    const { state } = useLocation();
    const [tasklistError, setTasklistError] = useState("");
    const [tasklists, setTasklists] = useState([]);

    const fetchTasklsts = async () => {
        try {
            const res = await getTasklists(state.boardId);
            setTasklists(res);
        } catch (err) {
            setTasklistError(err);
        }
    }

    useEffect(() => {
        if (state.boardId) {
            fetchTasklsts();
        }
    }, []);

    const handleAddTasklist = (newTasklist) => {
        setTasklists([...tasklists, newTasklist])
    };

    const autoWidth = () => {
        const tasklistsLenAll = tasklists.length + 1;
        const WIDTH = 300;
        const MARGIN = 15;
        const value = 
            (tasklistsLenAll * WIDTH) + 
            (tasklistsLenAll * MARGIN);
        return {
            "width": value + "px"
        }
    }

    return (
        <Layout title={"Boards"}>
            <div className="page-board__contents">
                <div className="page-board__contents-parent">
                    <div style={autoWidth()} className="page-board__contents-inner">
                        <div className="page-board__item">
                            <Tasklist tasklists={tasklists} error={tasklistError} boardId={state.boardId} />
                        </div>
                        <div className="page-board__item">
                            <div className="page-board__add">
                                <AddTasklist boardId={state.boardId} onListAdded={handleAddTasklist}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Boards;