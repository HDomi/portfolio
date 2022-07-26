import React from 'react';
import './cnts/cnt.css';
import { default as useScrollFadeIn } from '../hooks/useScrollFadeIn'
const Desingbn = () => {
    const animatedItem = {
        0: useScrollFadeIn('up', 1, 0),
        1: useScrollFadeIn('up', 1, 0.2),
        2: useScrollFadeIn('up', 1, 0.3),
        3: useScrollFadeIn('up', 1, 0.4),
        4: useScrollFadeIn('up', 1, 0.5),
        5: useScrollFadeIn('up', 1, 0.6),
        6: useScrollFadeIn('up', 1, 0.7),
        7: useScrollFadeIn('up', 1, 0.8),
        8: useScrollFadeIn('up', 1, 0.9),
        9: useScrollFadeIn('up', 1, 1.0),
        10: useScrollFadeIn('up', 1, 1.1),
        11: useScrollFadeIn('up', 1, 1.2),
        12: useScrollFadeIn('up', 1, 1.3),
        13: useScrollFadeIn('up', 1, 1.4),
        14: useScrollFadeIn('up', 1, 1.5),
        15: useScrollFadeIn('up', 1, 1.6),
        16: useScrollFadeIn('up', 1, 1.7),
        17: useScrollFadeIn('up', 1, 1.8),
        18: useScrollFadeIn('up', 1, 1.9),
        19: useScrollFadeIn('up', 1, 2.0),
      };
    const menus = [
        "1", "2", "3", "4",
        "5", "6", "7", "8",
        "9", "10", "11", "12",
        "13", "14", "15", "16",
        "17", "18", "19", "20"
    ]
    const menuList = menus.map((menu, index) => (
        <div className="dg_cnt_wrap" {...animatedItem[index]} key={index} id={menu}>
            <div className="dg_cnt">
                <img className="banner_img" alt="배너사진" src={process.env.PUBLIC_URL + '/img/banner/' + index + '.jpg'}/>
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
