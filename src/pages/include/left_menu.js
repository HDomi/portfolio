import './left_foot.css';
import React,{useState} from "react";
import logo_w from "../../img/ic_dmlogo_w.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faReact } from "@fortawesome/free-brands-svg-icons";

const Left_menu =() => {
    const [hamOpen, hmMenu] = useState(false);  
    const togglehamMenu = () => {
        hmMenu(hamOpen => !hamOpen); // 햄버거메뉴 열고닫기
    }
    return(
        <div className={"lm_wrap " + (hamOpen ? "lm_wrap_show" : null)}>
            <div className={"lm_cnt " + (hamOpen ? "lm_cnt_show" : null)}>
                <>
                    <input type="checkbox" id="hamb_menu" className="hamb_menu" onClick={()=>togglehamMenu()}/>
                    <label htmlFor="hamb_menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </>

            <img className="ic_domilogo ic_dl" alt="ic_domilogo" src={logo_w} width="45px"/>
            <div className="icon_wrap">
                <FontAwesomeIcon icon={faGithub} className="fa_lm_style"/>
                <FontAwesomeIcon icon={faReact} className="fa_lm_style"/>
                <FontAwesomeIcon icon={faInstagram} className="fa_lm_style"/>
            </div>     


            </div>
        </div>
    )
    
}

export default Left_menu;
