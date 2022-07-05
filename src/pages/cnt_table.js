import React from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
import './cnt.css';
import CntTest from "./cnts/cnttest.js";
import CntTest2 from "./cnts/cnttest2.js";

function CntTable(){
    return(
        <Routes>
            <Route path="/" >
              <Route index element={<CntTest />} />
              <Route path="/portfolio/main" element={<CntTest />} />
              <Route path="/portfolio/profile" element={<CntTest2 />} />
            </Route>
        </Routes>  
    );
}

export default CntTable;