import React, {useState} from "react";
import './cnts/cnt.css';
import '../App.css';
import './pages.css';
import { default as useScrollFadeIn } from '../hooks/useScrollFadeIn'
import PubModal from './include/PubModal'
const Webpub =() => {
    const animatedItem = {
        0: useScrollFadeIn('up', 1, 0),
        1: useScrollFadeIn('up', 1, 0.2),
        2: useScrollFadeIn('up', 1, 0.3),
        3: useScrollFadeIn('up', 1, 0.4),
        4: useScrollFadeIn('up', 1, 0.5),
        5: useScrollFadeIn('up', 1, 0.6),
      };
      const webpub_thum = [
        {
            id:0,
            title:"편의",
            old:"2021.06 ~ 06",
            des:"양성교육 과정 중 심플함 속 화려한 색감을 표현하기 좋은 한지를 아이템으로 한 쇼핑몰을 만들어 보고 싶었습니다.",
            gyd:"100%"
        },
        {
            id:1,
            title:"도미넌스",
            old:"2021.07 ~ 07",
            des:"소프트웨어 뿐이 아니라 하드웨어에도 관심이 많아, 컴퓨터를 판매하는 쇼핑몰을 만들어 보았습니다.",
            gyd:"100%"
        },
        {
            id:2,
            title:"스마트시티 라이브러리",
            old:"2021.12 ~ 01",
            des:"정부지원 사업으로 진행되었던 프로젝트로서 깔끔한 디자인과 퍼블리싱이 관건이었습니다.",
            gyd:"100%"
        },
        {
            id:3,
            title:"데이터가공 서비스",
            old:"2022.04 ~ 04",
            des:"㈜패턴테크의 첫 런칭 프로젝트로 이미지를 사이트 내에서 쉽게 가공해주는 사이트입니다.",
            gyd:"100%"
        }
    ]
    //랜딩 리스트를 누르면 누른 해당 id가져오게 저장
    const [listBtnId, setContent] = useState();
    
    const buttonValueSetting = e => {
        const { id } = e.target;
        setContent( id );
        openModal();
    };
    const pubList = webpub_thum.map((item)=>{
        const {id,title,old,des,gyd} = item
                return(
                    <div className="pub_cnt_wrap" key={id}>
                        <div className="pub_cnt" {...animatedItem[id]} onClick={buttonValueSetting}>
                            <div className="webpub_txt" id={id}>
                                <b>{title}<br/><div className="webpub_gyd">기여도 : {gyd}</div></b><br/>
                                <p>{old}<br/><br/><span>{des}</span></p>
                            </div>
                            <img className="webpub_img" alt="배너사진" src={process.env.PUBLIC_URL + '/img/webpub/thumnail/' + id + '.jpg'}/> 
                        </div>
                    </div>
                )
                    
            }); 
    //모달팝업 정의
    const [modalVisible, setModalVisible] = useState(false)
    const openModal = () => {
        setModalVisible(true)
    }
    const closeModal = () => {
        setModalVisible(false)
    }
    //모달팝업 내부 이미지 아이디 생성
    const pubListId = [
        {
            id:0,
            title:"감각있는 한지 쇼핑몰, 편의",
            subtit:"양성교육 과정 중 심플함 속 화려한 색감을 표현하기 좋은 한지를 아이템으로 한 쇼핑몰을 만들어 보고 싶었습니다.",
            firsttxt:"1",
            secondtxt:"2",
            figmalk:"",
            shortct:"https://hwang1139.cafe24.com/html/pnei/main.html",
            link:{ __html: "<iframe width='100%' height='100%' src='https://hwang1139.cafe24.com/html/pnei/main.html' allowfullscreen/>"},
        },
        {
            id:1,
            title:"스마트한 컴퓨터 쇼핑몰, 도미넌스",
            subtit:"소프트웨어 뿐이 아니라 하드웨어에도 관심이 많아, 컴퓨터를 판매하는 쇼핑몰을 만들어 보았습니다.",
            firsttxt:"1",
            secondtxt:"2",
            figmalk:"",
            shortct:"https://hwang1139.cafe24.com/html/dominc/main.html",
            link:{ __html: "<iframe width='100%' height='100%' src='https://hwang1139.cafe24.com/html/dominc/main.html' allowfullscreen/>"},
        },
        {
            id:2,
            title:"스마트시티 라이브러리",
            subtit:"정부지원 사업으로 진행되었던 프로젝트로서 깔끔한 디자인과 퍼블리싱이 관건이었습니다.",
            firsttxt:"1",
            secondtxt:"2",
            figmalk:"",
            shortct:"https://hdomi.github.io/smartcity/views/main",
            link:{ __html: "<iframe width='100%' height='100%' src='https://hdomi.github.io/smartcity/views/main' allowfullscreen/>"},
        },
        {
            id:3,
            title:"데이터가공 서비스",
            subtit:"㈜패턴테크의 첫 런칭 프로젝트로 이미지를 사이트 내에서 쉽게 가공해주는 사이트입니다.",
            firsttxt:"1",
            secondtxt:"2",
            figmalk:"",
            shortct:"https://hdomi.github.io/datacorp/views/main",
            link:{ __html: "<iframe width='100%' height='100%' src='https://hdomi.github.io/datacorp/views/main' allowfullscreen/>"},
        },
    ]
  
    const [miOpen, hmMenu] = useState(false);  
    const togglemiMenu = () => {
        hmMenu(miOpen => !miOpen); // 미리보기 열고닫기
    }
    //모달팝업 내부 이미지를 map으로 모달리스트 생성
    const pubListModal = pubListId.map((pubListIds) => {
        const {id,title,subtit,firsttxt,secondtxt,figmalk,shortct,link} = pubListIds
        return(
            <div>
                {
                modalVisible && <PubModal visible={modalVisible} closable={true} maskClosable={true} onClose={closeModal}>
                    <div className="pub_detail_inner" id={id}>
                        <div className="cnt_tit">{title}</div>
                        <div className="tit_line"></div>
                        <div className="cnt_sub_tit">{subtit}</div>

                        <div className="text_area">
                            디자인<br/>
                            {firsttxt}
                            {figmalk}
                        </div>

                        <div className="text_area">
                            {secondtxt}
                        </div>

                        <div className="text_area linkarea">
                            <div className="link_txt" onClick={() => window.open(shortct)}>
                                사이트 바로가기
                            </div>
                            <div className="mi_show" onClick={()=>togglemiMenu()}>미리보기<span className={"try_set " + (miOpen ? "reflect" : " ")}> ▼</span></div>
                        </div>

                        <div className={"iframe_f " + (miOpen ? "iframe_f_show" : " ")}>
                            <div className="pub_webview" name="frame" dangerouslySetInnerHTML={link}/>
                        </div>
                    </div>
                </PubModal>
                }
            </div>
        )
        
        });
    return(
        <div className="cnt_wrap">
            <div className="cnt">
                <div className="cnt_tit">웹 퍼블리싱</div>
                <div className="tit_line"></div>
                <div className="cnt_sub_tit">교육 과정부터, 현재에 이르기까지 작업한 작업물들 입니다.</div>
                <div className="cnt_sec cnt_sec2 webpub_sec">
                    <div className="cnt_inner_wrap3">    
                        {pubList}
                        {pubListModal[listBtnId]}
                         <br/><br/><br/><br/><br/><br/> 
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Webpub;
