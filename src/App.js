import './App.css';
import * as React from 'react';
import Header from "./pages/include/header.js";
import Footer from "./pages/include/footer.js";
import LeftMenu from "./pages/include/left_menu.js";
import CntTable from './pages/cnt_table';

const App = () => {


  return ( 
    <div className="App">
      <div className="wrap">
        <div className="back_lm"></div>
        <LeftMenu />
          <div className="app-body">
            <Header />
            <CntTable />
            <Footer />
          </div>
      </div>
    </div>

  );
};

export default App;
