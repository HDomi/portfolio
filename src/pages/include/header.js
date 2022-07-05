import './left_foot.css';
import React,{useState} from "react";
import { Link, Outlet } from "react-router-dom"; //링크걸기
import logo_b from "../../img/ic_dmlogo_b.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faReact } from "@fortawesome/free-brands-svg-icons";


const Header =() => {
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
        <div className={"hd_wrap " + (hamOpen ? "hd_wrap_show" : null)}>
            <div className={"hd_cnt " + (hamOpen ? "hd_cnt_show" : null)}>
                <>
                    <input type="checkbox" id="hd_hamb_menu" className={"hd_hamb_menu " + (hamOpen ? "hd_hamb_menu_show" : null)} onClick={()=>togglehamMenu()}/>
                    <label htmlFor={"hd_hamb_menu"}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </>
      
                <Link to={"/login"}><img className="ic_domilogo ic_dl hd_domilogo" alt="ic_domilogo" src={logo_b} width="45x"/></Link>
       
                <div className={"hd_menu_wrap " + (hamOpen ? "hd_menu_wrap_show" : null)}>
                    <ul>
                        <li><Link to={"/portfolio/"}>- Homepage</Link></li>
                        <li><Link to={"/portfolio/profile"}>- Profile</Link></li>
                        <li onClick={()=>togglewpMenu()}>- Web_Publishing<div className={"try_set " + (webpubOpen ? "reflect" : null)}> ▼</div>
                            <div className={"webpub_sh hd_shelf " + (webpubOpen ? "hd_shelf_show" : null)}>
                                <ul>
                                    <li>└ <Link to={"/portfolio/wp/self"}>☆ 개인_프로젝트</Link></li>
                                    <li>└ <Link to={"/portfolio/wp/dot"}>회사1</Link></li>
                                    
                                </ul>
                            </div>
                        </li>
                        <li onClick={()=>togglewdMenu()}>- Web_Design<span className={"try_set " + (webdeOpen ? "reflect" : null)}> ▼</span>
                            <div className={"webde_sh hd_shelf " + (webdeOpen ? "hd_shelf_show" : null)}>
                                <ul>
                                    <li>└ <Link to={"/portfolio/wd/self"}>☆ 개인_프로젝트</Link></li>
                                    <li>└ <Link to={"/portfolio/wd/dot"}>회사1</Link></li>

                                </ul>
                            </div>
                        </li>
                        <li><Link to={"/portfolio/contactme"}>- Contact ME</Link></li>
                    </ul>
                </div>

                <div className="hd_icon_wrap">
                    <FontAwesomeIcon icon={faGithub} className="fa_lm_style" onClick={() => window.open('https://github.com/HDomi/portfolio', '_blank')}/>
                    <FontAwesomeIcon icon={faReact} className="fa_lm_style"/>
                    <FontAwesomeIcon icon={faInstagram} className="fa_lm_style"/>
                </div>
             


            </div>
            <Outlet/>
        </div>
    )
    
}

export default Header;
