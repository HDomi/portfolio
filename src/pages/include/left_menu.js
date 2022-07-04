import './left_foot.css';
import React,{useState} from "react";
import { BrowserRouter, Link } from "react-router-dom"; //링크걸기

import logo_w from "../../img/ic_dmlogo_w.png";
import profile_img from "../../img/profile_img.png";

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

            <BrowserRouter>
                <Link to={"/login"}><img className="ic_domilogo ic_dl" alt="ic_domilogo" src={logo_w} width="45px"/></Link>
            </BrowserRouter>

            <div className={"profile_img_sec " + (hamOpen ? "profile_img_sec_n" : null)}>
                <img className="img_profile" alt="프로필이미지" src={profile_img} width="150px"/>
                <div className="myName">황재영</div>
                <div className="myName_txt">이건 설명입니다.</div>
            </div>

            <BrowserRouter>
                <div className={"lm_menu_wrap " + (hamOpen ? "lm_menu_wrap_show" : null)}>
                    <ul>
                        <li><Link to={"/homepage"}>- Homepage</Link></li>
                        <li><Link to={"/profile"}>- Profile</Link></li>
                        <li><Link to={"/"}>- Web_Publishing<span> ▼</span></Link></li>
                        <li><Link to={"/"}>- Web_Design<span> ▼</span></Link></li>
                        <li><Link to={"/contactme"}>- Contact ME</Link></li>
                    </ul>
                </div>
            </BrowserRouter>

            <div className="icon_wrap">
                <FontAwesomeIcon icon={faGithub} className="fa_lm_style" onClick={() => window.open('https://github.com/HDomi/portfolio', '_blank')}/>
                <FontAwesomeIcon icon={faReact} className="fa_lm_style"/>
                <FontAwesomeIcon icon={faInstagram} className="fa_lm_style"/>
            </div>
            </div>
        </div>
    )
    
}

export default Left_menu;
