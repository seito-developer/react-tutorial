import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from '../pages/Board/Board';
import Home from '../pages/Home/Home';


const App = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path={`/`} element={<Home />} />
            <Route path={`/board`} element={<Board />} />
          </Routes>
        </BrowserRouter>
      );
}

export default App;