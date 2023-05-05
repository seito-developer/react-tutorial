import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [hoge, setHoge] = React.useState("");

    useEffect(()=>{
        const fetchFromLaravel = async () => {
            const res  = await axios.get(`/api/hoge`);
            setHoge(res.data.hoge)
        };
        fetchFromLaravel();
    }, [])

    return (
        <div className="App">
            <h1 style={{color:"gold"}}>Hi, React App</h1>
            { hoge }
        </div>
    );
}

export default App;