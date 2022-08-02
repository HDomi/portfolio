import React from "react";
import { Outlet } from "react-router-dom";

const footer =() => {
    return(
        <footer className="all_footer">
            <p>H.J.Y _ Domi Portfolio<br/>© CopyRight BY Domi. ALL RIGHTS RESERVED.</p>
            <Outlet/>
        </footer>
    )
    
}

export default footer;
