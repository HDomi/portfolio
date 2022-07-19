import './App.css';

import React, {useState, useEffect} from 'react';

import Loading from './pages/loading.js';

import Header from "./pages/include/header.js";
import Footer from "./pages/include/footer.js";
import LeftMenu from "./pages/include/left_menu.js";
import CntTable from './pages/cnt_table';

const App = () => {
  const [ready, setReady] = useState(true)
  useEffect(()=>{
    //뒤의 1000 숫자는 1초를 뜻함     
    //1초 뒤에 실행되는 코드들이 담겨 있는 함수     
      setTimeout(()=>{
        setReady(false)
        },2500)
    },[])
    
  return ready ? <Loading/> : ( 
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
