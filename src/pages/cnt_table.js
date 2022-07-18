import React from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
import './cnts/cnt.css';
import Main from "./main.js";
import Profile from "./profile.js";

import Desingbn from './design_bn';


function CntTable(){
    return(
        <Routes>
            <Route path="/" >
              <Route path="/" element={<Main />} />
              <Route path="/portfolio/" element={<Main />} />
              <Route path="/portfolio/profile" element={<Profile />} />

              <Route path="/portfolio/wd/banner" element={<Desingbn />} />
            </Route>
        </Routes>  
    );
}

export default CntTable;