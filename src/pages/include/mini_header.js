import React from "react";
import { Outlet } from "react-router-dom"; //링크걸기
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
const MiniHeader =() => {

    return(
        <div className="mini_header">
            <div className="mhd_lg_btn" onClick={() => ToastsStore.warning("준비중입니다.")}>Login</div>
            <Outlet/>
            <ToastsContainer position={ToastsContainerPosition.TOP_CENTER} store={ToastsStore}/>
        </div>
    )
    
}

export default MiniHeader;
