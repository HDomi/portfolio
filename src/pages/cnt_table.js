import React from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
import './cnts/cnt.css';
import Main from "./main.js";
import CntTest from "./cnts/cnttest.js";

function CntTable(){
    return(
        <Routes>
            <Route path="/" >
              <Route path="/" element={<Main />} />
              <Route path="/portfolio/" element={<Main />} />
              <Route path="/portfolio/profile" element={<CntTest />} />
            </Route>
        </Routes>  
    );
}

export default CntTable;