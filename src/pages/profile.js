import {React} from "react";
import './cnts/cnt.css';
import '../App.css';
import './pages.css';

const Profile =() => {
    
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
                            </div>
                        </div>       
                    </div>
                    
                </div>
            </div>
        </div>
    )
    
}

export default Profile;
