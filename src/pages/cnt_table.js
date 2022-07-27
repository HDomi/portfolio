import React from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
import './cnts/cnt.css';
import Main from "./main.js";
import Profile from "./profile.js";
import Webpub from "./webpub";
import Contactme from "./contactme.js";

import Desingbn from './design_bn';
import LandingPage from './landingpage';

function CntTable(){

    return(
        <Routes>
            <Route path="/" >
              <Route path="/" element={<Main />} />
              
              <Route path="/portfolio/" element={<Main />} />
              <Route path="/portfolio/profile" element={<Profile />} />
              <Route path="/portfolio/webpub" element={<Webpub />} />
              <Route path="/portfolio/contactme" element={<Contactme />} />

              <Route path="/portfolio/wd/banner" element={<Desingbn />} />
              <Route path="/portfolio/wd/Landing" element={<LandingPage />} />
            </Route>
        </Routes>  
    );
}

export default CntTable;