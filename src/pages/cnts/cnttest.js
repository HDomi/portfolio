import React from "react";
import './cnt.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faReact } from "@fortawesome/free-brands-svg-icons";


const CntTest =() => {
    return(
        <div className="cnt_wrap">
                <div className="cnt">
                  <div className="cnt_tit">테스트페이지1</div>
                  <div className="tit_line"></div>
                  <div className="cnt_sub_tit">서브타이틀</div>
                  <div className="cnt_sec">
                      asdasdasd커밋테스트2
                  </div>
                </div>
            </div>
    )
    
}

export default CntTest;
