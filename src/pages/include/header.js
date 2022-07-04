import './left_foot.css';
import React,{useState} from "react";
import logo_b from "../../img/ic_dmlogo_b.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faReact } from "@fortawesome/free-brands-svg-icons";

const Header =() => {
    const [hamOpen, hmMenu] = useState(false);  
    const togglehamMenu = () => {
        hmMenu(hamOpen => !hamOpen); // 햄버거메뉴 열고닫기
    }
    return(
        <div className={"hd_wrap " + (hamOpen ? "hd_wrap_show" : null)}>
            <div className={"hd_cnt " + (hamOpen ? "hd_cnt_show" : null)}>
                <>
                    <input type="checkbox" id="hd_hamb_menu" className="hd_hamb_menu" onClick={()=>togglehamMenu()}/>
                    <label htmlFor="hd_hamb_menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </>
                <img className="ic_domilogo" alt="ic_domilogo" src={logo_b} />
                <div className="icon_wrap">
                    <FontAwesomeIcon icon={faGithub} className="fa_lm_style2"/>
                    <FontAwesomeIcon icon={faReact} className="fa_lm_style2"/>
                    <FontAwesomeIcon icon={faInstagram} className="fa_lm_style2"/>
                </div>  


            </div>
        </div>
    )
    
}

export default Header;
