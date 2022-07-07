import './left_foot.css';
import React,{useState} from "react";
import { Link, Outlet } from "react-router-dom"; //링크걸기
import logo_w from "../../img/ic_dmlogo_w.png";
import profile_img from "../../img/profile_img.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faReact } from "@fortawesome/free-brands-svg-icons";

const LeftMenu =() => {
    const [hamOpen, hmMenu] = useState(false);  
    const togglehamMenu = () => {
        hmMenu(hamOpen => !hamOpen); // 햄버거메뉴 열고닫기
    }
    const [webpubOpen, wpMenu] = useState(false);  
    const togglewpMenu = () => {
        wpMenu(webpubOpen => !webpubOpen); // 퍼블리싱 열고닫기
    }
    const [webdeOpen, wdMenu] = useState(false);  
    const togglewdMenu = () => {
        wdMenu(webdeOpen => !webdeOpen); // 퍼블리싱 열고닫기
    }
    return(
        <div className={"lm_wrap " + (hamOpen ? "lm_wrap_show" : " ")}>
            <div className={"lm_cnt " + (hamOpen ? "lm_cnt_show" : " ")}>
                <>
                    <input type="checkbox" id="hamb_menu" className="hamb_menu" onClick={()=>togglehamMenu()}/>
                    <label htmlFor="hamb_menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </>

            
            <Link to={"/login"}><img className="ic_domilogo ic_dl" alt="ic_domilogo" src={logo_w} width="45px"/></Link>
         

            <div className={"profile_img_sec " + (hamOpen ? "profile_img_sec_n" : " ")}>
                <img className="img_profile" alt="프로필이미지" src={profile_img} width="150px"/>
                <div className="myName">황재영</div>
                <div className="myName_txt">이건 설명입니다.</div>
            </div>

        
            <div className={"lm_menu_wrap " + (hamOpen ? "lm_menu_wrap_show" : " ")}>
                <ul>
                    <li><Link to={"/portfolio/"}>- Homepage</Link></li>
                    <li><Link to={"/portfolio/profile"}>- Profile</Link></li>
                    <li onClick={()=>togglewpMenu()}>- Web_Publishing<div className={"try_set " + (webpubOpen ? "reflect" : " ")}> ▼</div>
                        <div className={"webpub_sh lm_shelf " + (webpubOpen ? "lm_shelf_show" : " ")}>
                            <ul>
                                <li>└ <Link to={"/portfolio/wp/self"}>☆ 개인_프로젝트</Link></li>
                                <li>└ <Link to={"/portfolio/wp/dot"}>회사1</Link></li>
                                    
                            </ul>
                        </div>
                    </li>
                    <li onClick={()=>togglewdMenu()}>- Web_Design<span className={"try_set " + (webdeOpen ? "reflect" : " ")}> ▼</span>
                        <div className={"webde_sh lm_shelf " + (webdeOpen ? "lm_shelf_show" : " ")}>
                            <ul>
                                <li>└ <Link to={"/portfolio/wd/self"}>☆ 개인_프로젝트</Link></li>
                                <li>└ <Link to={"/portfolio/wd/dot"}>회사1</Link></li>
                                    
                            </ul>
                        </div>
                    </li>
                    <li><Link to={"/portfolio/contactme"}>- Contact ME</Link></li>
                </ul>
            </div>
         

            <div className="icon_wrap">
                <FontAwesomeIcon icon={faGithub} className="fa_lm_style" onClick={() => window.open('https://github.com/HDomi/portfolio', '_blank')}/>
                <FontAwesomeIcon icon={faReact} className="fa_lm_style"/>
                <FontAwesomeIcon icon={faInstagram} className="fa_lm_style"/>
            </div>
            </div>
            <Outlet/>
        </div>
    )
    
}

export default LeftMenu;
