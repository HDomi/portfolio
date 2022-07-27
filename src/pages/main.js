import './cnts/cnt.css';
import '../App.css';
import './pages.css';
import react18 from "../img/react18.png";
import main_ii from "../img/main_input_img.jpg";
import main_mi from "../img/main_menu_img.jpg";
import { default as useScrollFadeIn } from '../hooks/useScrollFadeIn'
import React from 'react'

const Main =() => {
    const animatedItem = {
        0: useScrollFadeIn('up', 1, 0),
        1: useScrollFadeIn('up', 1, 0.2),
        2: useScrollFadeIn('up', 1, 0.3),
        3: useScrollFadeIn('up', 1, 0.4),
        4: useScrollFadeIn('up', 1, 0.5),
        5: useScrollFadeIn('up', 1, 0.6),
      };
    return(
        <div className="cnt_wrap">
            <div className="cnt">
                <div className="cnt_tit">HJY's Portfolio</div>
                <div className="tit_line"></div>
                <div className="cnt_sub_tit">간략소개</div>
                <div className="cnt_sec main_sec">
                    <div className="link_area ta_b" {...animatedItem[0]}>
                        제일 먼저, 이전에 만들었던 포트폴리오를 보며 <b>자아성찰</b>을 시작합니다.
                        <div className="link_txt" onClick={() => window.open('http://hwang1139.cafe24.com/html/portfolio/index.html', '_blank')}>
                            이전 포트폴리오 바로가기
                        </div>                       
                    </div>      
                    <div className="text_area ta_b" {...animatedItem[1]}>
                        다시한번 계획 시작,<br/>흔하고 화려한 포트폴리오가 아닌, <b>블로그 같은 친숙하고 깔끔한 디자인</b>을
                        디자인으로 정했습니다.<br/><br/> 그리하여 디자인 시작.
                    </div>
                    <div {...animatedItem[2]} className="ta_b">
                        <div dangerouslySetInnerHTML={{ __html: "<iframe style='border: 1px solid rgba(0, 0, 0, 0.1); margin-top:40px; border-radius:8px;' width='100%' height='350px' src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FdwJcOkbVxk5F0HqIv46HxW%2FDomi_Page' allowfullscreen/>"}} />
                        
                        <div className="text_area">
                            <b>평소에는 일반적인 html, css, js를 통해 만들었지만</b> 이번엔<br/>리액트를 통해 만들어보도록 합니다.
                        </div>
                    </div>
                    <div {...animatedItem[3]} className="ta_b">
                        <img className="cnt_img react18png" alt="리액트18" src={react18}/>
                        <div className="text_area">
                            <b>리액트 버전은 18버전</b>을 사용하기로 했습니다.<br/>
                            사실상 멘땅에 헤딩인지라 자료가 많은 이전버전을 사용하는게 좋다고 생각하나<br/>
                            변화하는 툴과 시장에 적응하는 것 또한 개발자의 역량이라 생각하기 때문에<br/>
                            가장 최신버전인 React18을 사용하기로 했습니다.<br/><br/><br/>

                            몇 가지의 효과 및 기능들을 위한 라이브러리를 제외하고, 모두 하드코딩으로<br/>제작되었습니다.
                        </div>
                    </div>
                    <div {...animatedItem[4]} className="ta_b">
                        <img className="cnt_img main_img2" alt="메인메뉴 이미지" src={main_mi}/>
                        <div className="text_area">
                            대략적인 포트폴리오 구성은<br/>
                            퍼블리싱 작업물들을 볼 수 있는 <b>- Web_Publishing,</b><br/>
                            디자인 작업물들을 볼 수 있는 <b>- Web_Design</b> 메뉴로 구성되어 있으며,<br/>
                            좌측 햄버거 메뉴를 열어 확인 하실 수 있습니다.
                        </div>
                    </div>
                    <div {...animatedItem[5]} className="ta_b mb_150">
                        <img className="cnt_img main_img" alt="메인인풋" src={main_ii}/>
                        <div className="text_area">
                            기타 문의사항이나 연락은 <b>Contact ME 메뉴</b>를 통해 보내주시길 바랍니다. ^^
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Main;