import React, { useState } from 'react';
import './cnts/cnt.css';
const Desingbn = () => {

    const menus = [
        "1", "2", "3", "4",
        "5", "6", "7", "8",
        "9", "10", "11", "12",
        "13", "14"
    ]
    const menuList = menus.map((menu, index) => (
        <div className="dg_cnt_wrap" key={index} id={menu} onClick={() => window.open(process.env.PUBLIC_URL + '/img/banner/' + index + '.jpg', '_blank', 'height=300px', 'width=760px')}>
            <div className="dg_cnt">
                <img className="test" alt="배너사진" src={process.env.PUBLIC_URL + '/img/banner/' + index + '.jpg'}/>
                <div className="dg_cnt_txt">
                    &lt; 클릭하여 새 창으로 보기 &gt;
                </div>
            </div>
        </div>
    ));
    return(
        <div className="cnt_wrap">
            <div className="cnt">
                <div className="cnt_tit">배너 디자인</div>
                <div className="tit_line"></div>
                <div className="cnt_sub_tit">Banner_Design / 작업물 중 일부를 첨부하였습니다.</div>
                <div className="cnt_sec cnt_sec2 design_banner_sec">
                    <div className="cnt_inner_wrap">    
                        {menuList} <br/><br/><br/><br/><br/><br/> 
                    </div>
                </div>
            </div>
        </div>
    );
    
};

export default Desingbn;
