import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boards from '../pages/boards';
import Home from '../pages/home';


const App = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path={`/`} element={<Home />} />
            <Route path={`/boards`} element={<Boards />} />
          </Routes>
        </BrowserRouter>
      );
}

export default App;