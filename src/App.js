import './App.css';
import * as React from 'react';
import Header from "./pages/include/header.js";
import Footer from "./pages/include/footer.js";
import Left_menu from "./pages/include/left_menu.js";
import CntTable from "./pages/cnt_table.js";


const App = () => {


  return ( 
      <div className="App">
        <div className="wrap">
            <div className="back_lm"></div>
            <Left_menu />
            <body className="app-body">
              <Header />
              <CntTable />
              <Footer />
            </body>
        </div>
      </div>

  );
};

export default App;
