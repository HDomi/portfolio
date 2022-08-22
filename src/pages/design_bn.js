import React from 'react';
import { default as useScrollFadeIn } from '../hooks/useScrollFadeIn'
const Desingbn = () => {
    const animatedItem = {
        0: useScrollFadeIn('up', 1, 0),
        1: useScrollFadeIn('up', 1, 0.05),
        2: useScrollFadeIn('up', 1, 0.1),
        3: useScrollFadeIn('up', 1, 0.15),
        4: useScrollFadeIn('up', 1, 0.2),
        5: useScrollFadeIn('up', 1, 0.25),
        6: useScrollFadeIn('up', 1, 0.3),
        7: useScrollFadeIn('up', 1, 0.35),
        8: useScrollFadeIn('up', 1, 0.4),
        9: useScrollFadeIn('up', 1, 0.45),
        10: useScrollFadeIn('up', 1, 0.5),
        11: useScrollFadeIn('up', 1, 0.55),
        12: useScrollFadeIn('up', 1, 0.6),
        13: useScrollFadeIn('up', 1, 0.65),
        14: useScrollFadeIn('up', 1, 0.7),
        15: useScrollFadeIn('up', 1, 0.75),
        16: useScrollFadeIn('up', 1, 0.8),
        17: useScrollFadeIn('up', 1, 0.85),
        18: useScrollFadeIn('up', 1, 0.9),
        19: useScrollFadeIn('up', 1, 0.95),
        20: useScrollFadeIn('up', 1, 1.00),
        21: useScrollFadeIn('up', 1, 1.05),
        22: useScrollFadeIn('up', 1, 1.10),
        23: useScrollFadeIn('up', 1, 1.15),
      };
    const menus = [
        "1", "2", "3", "4",
        "5", "6", "7", "8",
        "9", "10", "11", "12",
        "13", "14", "15", "16",
        "17", "18", "19", "20",
        "21", "22", "23", "24"
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
