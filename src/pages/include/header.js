import React from "react";
import './head_foot.css';
import Hamb from "./hamb.js";

const Header =() => {

    return(
    <header className="all_header">
        <div className="header_inner">
            <a href="http://hjydomi.duckdns.org:1139" class="logo">
            <img src={ require('../../img/ic_dmlogo_b.png') } alt="로고"/>
            <div className="logo_txt">Portfolio</div>
            </a>
            <Hamb />
            
            <div className="hd_btn_wrap">
                <a href="http://hjydomi.duckdns.org:1139" class="go_to_main">
                    메인으로
                </a>
                <div className="line"></div>
                <a href="http://hjydomi.duckdns.org:1139" class="login_btn">
                    로그인
                </a>
            </div>
        </div>
    </header>
    )
}

export default Header;
