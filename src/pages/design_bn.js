import React, { Component } from 'react';
import './cnts/cnt.css';
import testimg from "../img/banner/1.jpg";

class Desingbn extends Component {
    
    render() {
    return(
        <div className="cnt_wrap">
                <div className="cnt">
                  <div className="cnt_tit">배너 디자인</div>
                  <div className="tit_line"></div>
                  <div className="cnt_sub_tit">Banner_Design</div>
                  <div className="cnt_sec cnt_sec2 design_banner_sec">
                      <div className="cnt_inner_wrap">

                            <div className="dg_cnt_wrap">
                                <div className="dg_cnt">
                                    <img className="test" alt="test" src={testimg}/>
                                    <div className="dg_cnt_txt">
                                        이것은 제목입니다.
                                    </div>
                                </div>
                            </div>

                            <div className="dg_cnt_wrap">
                                <div className="dg_cnt">
                                    <img className="test" alt="test" src={testimg}/>
                                    <div className="dg_cnt_txt">
                                        이것은 제목입니다.
                                    </div>
                                </div>
                            </div>

                            <div className="dg_cnt_wrap">
                                <div className="dg_cnt">
                                    <img className="test" alt="test" src={testimg}/>
                                    <div className="dg_cnt_txt">
                                        이것은 제목입니다.
                                    </div>
                                </div>
                            </div>

                            <div className="dg_cnt_wrap">
                                <div className="dg_cnt">
                                    <img className="test" alt="test" src={testimg}/>
                                    <div className="dg_cnt_txt">
                                        이것은 제목입니다.
                                    </div>
                                </div>
                            </div>

                      </div>
                  </div>
                </div>
            </div>
    )
    }
}

export default Desingbn;
