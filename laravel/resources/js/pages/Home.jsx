import React, { useEffect, useState } from 'react';
import BoardList from '../components/BoardList';
import {getBoards} from '../api';
import AddBoard from '../components/AddBoard';

const Home = () => {
    const [boards, setBoards] = useState([]);
    const [error, setError] = useState("");

    const componentDidMount = async () => {
        try {
            const response = await getBoards();
            console.log('response:', response);
            setBoards(response);
        } catch(err) {
            setError(err);
        }
    }

    useEffect(() => {
        componentDidMount();
    }, []);

    return (
        <div>
            <h1>ToDo App</h1>
            <div>
                <BoardList boards={boards} error={error} />
                <AddBoard onBoardAdded={componentDidMount} />
                
                {/* <AddListButton /> */}
            </div>
        </div>
    );
}

export default Home;