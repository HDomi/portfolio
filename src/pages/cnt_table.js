import React from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
import './cnt.css';
import Main from "./cnts/main.js";
import CntTest from "./cnts/cnttest.js";

function CntTable(){
    return(
        <Routes>
            <Route path="/" >
              <Route index element={<Main />} />
              <Route path="/portfolio/" element={<Main />} />
              <Route path="/portfolio/profile" element={<CntTest />} />
            </Route>
        </Routes>  
    );
}

export default CntTable;