import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BoardList from '../components/BoardList';
import {fetchTest} from '../api';
import AddBoard from '../components/AddBoard';

const Home = () => {
    const [hoge, setHoge] = useState("");

    useEffect(()=>{
        const res = fetchTest();
        setHoge(res);
    }, [])

    const callback = () => {
        console.log('hi');
    }

    return (
        <div>
            <h1>ToDo App</h1>
            <div>
                <BoardList />
                <AddBoard　onBoardAdded={callback} />
                
                {/* <AddListButton /> */}
            </div>
        </div>
    );
}

export default Home;