import './App.css';
import * as React from 'react';
import Header from "./pages/include/header.js";
import Footer from "./pages/include/footer.js";
import RightMenu from "./pages/include/right_menu.js";

import CntTable from "./pages/cnt_table.js";


const App = () => {


  return (
    
      
    
      <div className="App">

        <Header />
        <div className="banner-sec">
            <div className="banner-tit">타이틀입니다.</div>
        </div>
        <div className="wrap">
            <body className="app-body">
              <CntTable />
              <RightMenu />
            </body>
        </div>
        

        <Footer />

      </div>

  );
};

export default App;
