import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BoardList from './BoardList';
import {fetchTest} from '../api';

const App = () => {
    const [hoge, setHoge] = useState("");

    useEffect(()=>{
        const res = fetchTest();
        setHoge(res);
    }, [])

    return (
        <div className="App">
            <BoardList />
        </div>
    );
}

export default App;