import React,{useState} from "react";
import '../../App.css';


const RightMenu =() => {
const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
const [isTry, setTry] = useState(false);  // 메뉴의 초기값을 false로 설정
const [isOpen2, setMenu2] = useState(false);  // 메뉴의 초기값을 false로 설정
const [isTry2, setTry2] = useState(false);  // 메뉴의 초기값을 false로 설정
  
const toggleMenu = () => {
      setMenu(isOpen => !isOpen); // on,off 개념 boolean
      setTry(isTry => !isTry); // on,off 개념 boolean
    }
const toggleMenu2 = () => {
      setMenu2(isOpen2 => !isOpen2); // on,off 개념 boolean
      setTry2(isTry2 => !isTry2); // on,off 개념 boolean
    }

 
    return(

    <div className="rm_menu">
        <div className="rm_inner">
            <div className="rel_line"></div>
            <div className="mn_txt_wrap">
            <div className="mn_txt_tit"><div>ㆍ&nbsp;</div>홈페이지 개요</div>
                <div className="mn_txt_line"></div>
            </div>
            <div className="mn_txt_wrap">
            <div className="mn_txt_tit"><div>ㆍ&nbsp;</div>Myself</div>
                <div className="mn_txt_line"></div>
            </div>
            <div className="mn_txt_wrap">
                <div className="mn_txt_tit"><div>ㆍ&nbsp;</div>History</div>
                <div className="mn_txt_line"></div>
            </div>
            <div className="mn_txt_wrap">
                <div className="mn_txt_tit" onClick={()=>toggleMenu()}><div  className={isTry ? "try_btn" : "try_ref"}>▼&nbsp;</div>P.Web_Publishing</div>
                <ul className={isOpen ? "mn_submn_show" : "mn_submn_hide"}>
                    <li>서브 ┘</li>
                    <li>서브 ┘</li>
                    <li>서브 ┘</li>
                    <li>서브 ┘</li>
                    <li>서브 ┘</li>
                </ul>
                <div className="mn_txt_line"></div>
            </div>
            <div className="mn_txt_wrap">
                <div className="mn_txt_tit" onClick={()=>toggleMenu2()}><div  className={isTry2 ? "try_btn" : "try_ref"}>▼&nbsp;</div>P.Design</div>
                <ul className={isOpen2 ? "mn_submn_show" : "mn_submn_hide"}>
                    <li>서브 ┘</li>
                    <li>서브 ┘</li>
                    <li>서브 ┘</li>
                    <li>서브 ┘</li>
                    <li>서브 ┘</li>
                </ul>
                <div className="mn_txt_line"></div>
            </div>
            <div className="mn_txt_wrap">
                <div className="mn_txt_tit"><div>ㆍ&nbsp;</div>Contact ME!</div>
            </div>
        </div>
    </div>

    )
}

export default RightMenu;