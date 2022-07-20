import {React} from "react";
import './cnts/cnt.css';
import '../App.css';
import './pages.css';
import Tilt from 'react-vanilla-tilt';

import profile_all from "../img/profile_all.jpg";

const Profile =() => {

    return(
        <div className="cnt_wrap">
            <div className="cnt">
                <div className="cnt_tit">황재영에 대하여..</div>
                <div className="tit_line"></div>
                <div className="cnt_sub_tit">Introduce Myself</div>
                <div className="cnt_sec prof_sec">
                    <div className="text_area">
                        <div className="cnt_in_tit">Myself</div>
                        <div className="prof_wrap">
                            <Tilt style={{}}>
                                <img className="img_profile_all" alt="프로필이미지" src={profile_all} />
                            </Tilt>
                            <div className="prof_txt_sec">
                                <p class="top_p"><b>이름</b> : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;황재영</p>
                                <p><b>생년월일</b> : 1998.05.27(25세)</p>
                                <p><b>연락처</b> : &nbsp;&nbsp;&nbsp;&nbsp;010-3892-8331</p>
                                <p><b>이메일</b> : hwangjae1139@naver.com</p>
                                <p>간단한 설명글인데 여따가 짧게 뭐라고쓰지</p>
                            </div>
                        </div>
                    </div>
                    <div className="text_area">
                        <div className="cnt_in_tit">Experience</div>
                        <div className="cnt_in_wrap">
                            <div className="ex_card_wrap">
                                <div className="card">
                                    <div className="ro_box"></div>
                                    <div className="card_tit">네트워크관리사2급</div>
                                </div>
                                <div className="card">
                                    <div className="ro_box"></div>
                                    <div className="card_tit">MOS PPT2016</div>
                                </div>
                                <div className="card">
                                    <div className="ro_box"></div>
                                    <div className="card_tit">GTQ 포토샵1급</div>
                                </div>
                                <div className="card">
                                    <div className="ro_box"></div>
                                    <div className="card_tit">컴퓨터활용능력2급</div>
                                </div>
                            </div>
                            <div className="tit_line"></div>
                            <div className="history_wrap">
                            
                                
                                <div className="cnt_in_tit">History</div>
                                <div className="cnt_in_tit_sub">Hover on Card !</div>
                                <div className="p_container">
                                    <Tilt style={{}}>
                                        <div className="p_card">
                                            <div className="p_content">
                                                <h2>01</h2>
                                                <h3>고등학교 재학 당시</h3>
                                                <p>용인고등학교App 개발</p>
                                                <div className="p_card_btn">June 2016.</div>
                                            </div>
                                        </div>
                                    </Tilt>
                                    <Tilt style={{}}>
                                        <div className="p_card">
                                            <div className="p_content">
                                                <h2>02</h2>
                                                <h3>국제대학교</h3>
                                                <p>컴퓨터공학과 졸업</p>
                                                <div className="p_card_btn">February 2021.</div>
                                            </div>
                                        </div>
                                    </Tilt>
                                    <Tilt style={{}}>
                                        <div className="p_card">
                                            <div className="p_content">
                                                <h2>03</h2>
                                                <h3>두드림 컴퓨터<br/>아카데미</h3>
                                                <p>웹디자이너 / 웹퍼블리셔<br/>양성과정 교육 수료</p>
                                                <div className="p_card_btn">August 2021.</div>
                                            </div>
                                        </div>
                                    </Tilt>
                                    <Tilt style={{}}>
                                        <div className="p_card">
                                            <div className="p_content">
                                                <h2>04</h2>
                                                <h3>닷네임코리아</h3>
                                                <p>디자인팀 팀장<br/>전반적인 디자인 및 퍼블리싱</p>
                                                <div className="p_card_btn">Oct 2021. ~<br/>Oct 2022.</div>
                                            </div>
                                        </div>
                                    </Tilt>
                                </div>
                            </div>
                        </div>       
                    </div>
                    
                </div>
            </div>
        </div>
    )
    
}

export default Profile;
