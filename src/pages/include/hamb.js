import React,{useState} from "react";
import './head_foot.css';
import '../../App.css';

const Hamb =() => {
const [hamOpen, hmMenu] = useState(false);  
const togglehamMenu = () => {
    hmMenu(hamOpen => !hamOpen); // 햄버거메뉴 열고닫기
}


const [isOpen, setMenu] = useState(false);  
const [isTry, setTry] = useState(false);  //첫번째 서랍 초기값 false
const [isOpen2, setMenu2] = useState(false);  
const [isTry2, setTry2] = useState(false);  //두번째 서랍 초기값 false


const toggleMenu = () => {
    setMenu(isOpen => !isOpen); 
    setTry(isTry => !isTry); //첫번째 서랍 on,off
  }
const toggleMenu2 = () => {
    setMenu2(isOpen2 => !isOpen2);
    setTry2(isTry2 => !isTry2); //두번째 서랍 on,off
  }

        return(
            <>
                <input type="checkbox" id="hamb_menu" className="hamb_menu" onClick={()=>togglehamMenu()}/>
                <label htmlFor="hamb_menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div className={hamOpen ? "hm_wrap_show" : "hm_wrap_hide"}>
                    <div className="hm_wrap">
                        <div className="hm_login">로그인</div>
                        <div className="rel_line2"></div>
                        <div className="mn_txt_wrap2">
                            <div className="mn_txt_tit2"><div>ㆍ&nbsp;</div>홈페이지 개요</div>
                            <div className="mn_txt_line2"></div>
                        </div>
                        <div className="mn_txt_wrap2">
                            <div className="mn_txt_tit2"><div>ㆍ&nbsp;</div>Myself</div>
                            <div className="mn_txt_line2"></div>
                        </div>
                        <div className="mn_txt_wrap2">
                            <div className="mn_txt_tit2"><div>ㆍ&nbsp;</div>History</div>
                            <div className="mn_txt_line2"></div>
                        </div>
                        <div className="mn_txt_wrap2">
                            <div className="mn_txt_tit2" onClick={()=>toggleMenu()}><div className={isTry ? "try_btn2" : "try_ref2"}>▼&nbsp;</div>P.Web_Publishing</div>
                            <ul className={isOpen ? "mn_submn_show2" : "mn_submn_hide2"}>
                                <li>서브 ┘</li>
                                <li>서브 ┘</li>
                                <li>서브 ┘</li>
                                <li>서브 ┘</li>
                                <li>서브 ┘</li>
                            </ul>
                            <div className="mn_txt_line2"></div>
                            
                        </div>
                        <div className="mn_txt_wrap2">
                            <div className="mn_txt_tit2" onClick={()=>toggleMenu2()}><div className={isTry2 ? "try_btn2" : "try_ref2"}>▼&nbsp;</div>P.Design</div>
                            <ul className={isOpen2 ? "mn_submn_show2" : "mn_submn_hide2"}>
                                <li>서브 ┘</li>
                                <li>서브 ┘</li>
                                <li>서브 ┘</li>
                                <li>서브 ┘</li>
                                <li>서브 ┘</li>
                            </ul>
                            <div className="mn_txt_line2"></div>
                        </div>
                        <div className="mn_txt_wrap2">
                            <div className="mn_txt_tit2"><div>ㆍ&nbsp;</div>Contact ME!</div>
                        </div>
                    </div>
                </div>
            </>
        )
    
}

export default Hamb;
