import './left_foot.css';
import React,{useState} from "react";

const Left_menu =() => {
    const [hamOpen, hmMenu] = useState(false);  
    const togglehamMenu = () => {
        hmMenu(hamOpen => !hamOpen); // 햄버거메뉴 열고닫기
    }
    return(
        <div className={"lm_wrap " + (hamOpen ? "lm_wrap_show" : null)}>
            <div className="lm_cnt">
                <>
                    <input type="checkbox" id="hamb_menu" className="hamb_menu" onClick={()=>togglehamMenu()}/>
                    <label htmlFor="hamb_menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </>




            </div>
        </div>
    )
    
}

export default Left_menu;
