import React, {Component} from 'react'
import './cnts/cnt.css';
import '../App.css';
import './pages.css';
import LandingList from "./include/landingList";

class LandingPage extends Component  {
    render(){
        return(
            <div className="cnt_wrap">
                <div className="cnt">
                    <div className="cnt_tit">랜딩 / 상세페이지 디자인</div>
                    <div className="tit_line"></div>
                    <div className="cnt_sub_tit">Page_Design / 작업물 중 일부를 첨부하였습니다.</div>
                    <div className="cnt_sec cnt_sec2 land_sec">
                        <LandingList />     
                    </div>
                </div>
            </div>
        )
    
    }
}
export default LandingPage;
