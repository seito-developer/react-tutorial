import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from '../pages/Board';
import Home from '../pages/home';


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