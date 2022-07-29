import './left_foot.css';
import React,{useState} from "react";
import { Link, Outlet } from "react-router-dom"; //링크걸기
import logo_w from "../../img/ic_dmlogo_w.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import profile_img from "../../img/profile_img.png";

const Header =() => {
    const [hamOpen, hmMenu] = useState(false);  
    const togglehamMenu = () => {
        hmMenu(hamOpen => !hamOpen); // 햄버거메뉴 열고닫기
    }
    const [webdeOpen, wdMenu] = useState(false);  
    const togglewdMenu = () => {
        wdMenu(webdeOpen => !webdeOpen); // 퍼블리싱 열고닫기
    }
    return(
        <div className={"hd_wrap " + (hamOpen ? "hd_wrap_show" : " ")}>
            <div className={"hd_cnt " + (hamOpen ? "hd_cnt_show" : " ")}>
                <>
                    <input type="checkbox" id="hd_hamb_menu" className={"hd_hamb_menu " + (hamOpen ? "hd_hamb_menu_show" : " ")} onClick={()=>togglehamMenu()}/>
                    <label htmlFor={"hd_hamb_menu"}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </>
      
                <Link to={"/login"}><img className="ic_domilogo ic_dl hd_domilogo" alt="ic_domilogo" src={logo_w} width="45x"/></Link>
                
                
                <div className={"hd_menu_wrap " + (hamOpen ? "hd_menu_wrap_show" : " ")}>
                    <div className="profile_img_sec2">
                        <img className="img_profile" alt="프로필이미지" src={profile_img} width="150px"/>
                        <div className="myName">황재영</div>
                    </div>
                    <ul>
                        <li><Link to={"/portfolio/"}>- Homepage</Link></li>
                        <li><Link to={"/portfolio/profile"}>- Profile</Link></li>
                        <li><Link to={"/portfolio/webpub"}>- Web_Publishing</Link></li>
                        <li onClick={()=>togglewdMenu()}>- Web_Design<span className={"try_set " + (webdeOpen ? "reflect" : " ")}> ▼</span>
                            <div className={"webde_sh hd_shelf " + (webdeOpen ? "hd_shelf_show" : " ")}>
                                <ul>
                                    <li>└ <Link to={"/portfolio/wd/banner"}>배너</Link></li>
                                    <li>└ <Link to={"/portfolio/wd/landing"}>상세페이지/랜딩페이지</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li><Link to={"/portfolio/contactme"}>- Contact ME</Link></li>
                    </ul>
                    <div className="hd_icon_wrap">
                        <FontAwesomeIcon icon={faGithub} className="fa_lm_style" onClick={() => window.open('https://github.com/HDomi/portfolio', '_blank')}/>
                        <FontAwesomeIcon icon={faInstagram} className="fa_lm_style" onClick={() => window.open('https://www.instagram.com/domi_web_lab/', '_blank')}/>
                    </div>
                </div>

                
             


            </div>
            <Outlet/>
        </div>
    )
    
}

export default Header;
