import {React} from "react";
import './cnts/cnt.css';
import '../App.css';
import './pages.css';
import VanillaTilt from 'vanilla-tilt';
const Profile =() => {
    const elements = document.querySelectorAll(".p_card");
    VanillaTilt.init(elements);

    return(
        <div className="cnt_wrap">
            <div className="cnt">
                <div className="cnt_tit">황재영에 대하여..</div>
                <div className="tit_line"></div>
                <div className="cnt_sub_tit">Introduce Myself</div>
                <div className="cnt_sec prof_sec">
                    <div className="text_area">
                        <div className="cnt_in_wrap">
                            <div className="cnt_in_tit">- 자격증 -</div>
                            <div className="ex_card_wrap">
                                <div className="card">
                                    <div className="ro_box"></div>
                                    <div className="card_tit">네트워크관리사2급</div>
                                </div>
                                <div className="card">
                                    <div className="ro_box"></div>
                                    <div className="card_tit">MOS PowerPoint2016</div>
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
                                <div className="cnt_in_tit">- 히스토리 -</div>
                                <div className="p_container">
                                    <div className="p_card">
                                        <div className="p_content">
                                            <h2>01</h2>
                                            <h3>고등학교 재학 당시</h3>
                                            <p>용인고등학교App 개발</p>
                                            <div className="p_card_btn">June 2016.</div>
                                        </div>
                                    </div>
                                    <div className="p_card">
                                        <div className="p_content">
                                            <h2>02</h2>
                                            <h3>국제대학교</h3>
                                            <p>컴퓨터공학과 졸업</p>
                                            <div className="p_card_btn">February 2021.</div>
                                        </div>
                                    </div>
                                    <div className="p_card">
                                        <div className="p_content">
                                            <h2>03</h2>
                                            <h3>두드림 컴퓨터<br/>아카데미</h3>
                                            <p>웹디자이너 / 웹퍼블리셔<br/>양성과정 교육 수료</p>
                                            <div className="p_card_btn">August 2021.</div>
                                        </div>
                                    </div>
                                    <div className="p_card">
                                        <div className="p_content">
                                            <h2>04</h2>
                                            <h3>닷네임코리아</h3>
                                            <p>디자인팀 팀장<br/>전반적인 디자인 및 퍼블리싱</p>
                                            <div className="p_card_btn">asd</div>
                                        </div>
                                    </div>
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
