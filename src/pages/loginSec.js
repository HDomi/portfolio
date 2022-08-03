import React from 'react'
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

const loginSec =() => {

    return(
        <div className="cnt_wrap">
            <div className="cnt">
                <div className="cnt_tit">로그인</div>
                <div className="cnt_sec login_sec">
                    <div className="login_box">
                        <p className="lg_tit">Login</p>
                        <ul>
                            <li className="lg_bar_tit">아이디</li>
                            <li><input type="text" className="lg_all_bar lg_id_bar"/></li>
                            <li className="lg_bar_tit">비밀번호</li>
                            <li><input type="password" className="lg_all_bar lg_pwd_bar"/></li>
                            <li className="lg_btn" onClick={() => ToastsStore.warning("아직 준비되지 않았습니다.")}>로그인</li>
                        </ul>
                        <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore}/>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default loginSec;