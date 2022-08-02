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
            gyd:"100%",
            buh:"X"
        },
        {
            id:1,
            title:"도미넌스",
            old:"2021.07 ~ 07",
            des:"소프트웨어 뿐이 아니라 하드웨어에도 관심이 많아, 컴퓨터를 판매하는 쇼핑몰을 만들어 보았습니다.",
            gyd:"100%",
            buh:"X"
        },
        {
            id:2,
            title:"스마트 패턴장부 3page",
            old:"2021.11 ~ 11",
            des:"기존 런칭중이던 스마트 패턴장부에 3개 페이지와 팝업창을 추가 하는 작업입니다.",
            gyd:"100%",
            buh:"O"
        },
        {
            id:3,
            title:"스마트시티 라이브러리",
            old:"2021.12 ~ 01",
            des:"정부지원 사업으로 진행되었던 프로젝트",
            gyd:"100%",
            buh:"일부적용"
        },
        {
            id:4,
            title:"데이터가공 서비스",
            old:"2022.04 ~ 04",
            des:"이미지를 사이트 내에서 쉽게 가공해주는 사이트입니다.",
            gyd:"100%",
            buh:"일부적용"
        },
        {
            id:5,
            title:"황재영의 포트폴리오",
            old:"2022.07 ~ 08",
            des:"황재영의 포트폴리오 입니다. 첫 React 작업물",
            gyd:"100%",
            buh:"O"
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
        const {id,title,old,des,gyd,buh} = item
                return(
                    <div className="pub_cnt_wrap" key={id}>
                        <div className="pub_cnt" {...animatedItem[id]} onClick={buttonValueSetting}>
                            <div className="webpub_txt" id={id}>
                                <b>{title}<br/><div className="webpub_gyd">기여도 : {gyd} / 반응형 : {buh}</div></b><br/>
                                <p>{old}<br/><br/><span>{des}</span></p>
                            </div>
                            <img className="webpub_img" id={id} alt="배너사진" src={process.env.PUBLIC_URL + '/img/webpub/thumnail/' + id + '.jpg'}/> 
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
            subtit:"양성교육 과정 중 심플함 속 화려한 색감을 표현하기 좋은 한지를 아이템으로 한 쇼핑몰",
            firsttxt:"100%",
            secondtxt:"한지는 색감이 뚜렸하고 화려하기 때문에 상품을 배경을 흰색으로 하고 깔끔한 디자인으로 상품을 최대한 부각 시켰습니다.",
            thirdtxt:"팝업 로그인창, 상단 메뉴, 상품 리스트",
            fourthtxt:"메인, 색 한지 상품리스트, 오시는 길로 탭을 나누어 최대한 간결하고 상품에 집중 할 수 있는 ui구성",
            figmalk:{ __html: "<iframe width='100%' height='100%' src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FozJKwbiSo5dToWKcppZMCd%2F%25ED%258E%25B8%25EC%259D%2598' allowfullscreen/>"},
            shortct:"https://hwang1139.cafe24.com/html/pnei/main.html",
            link:{ __html: "<iframe width='100%' height='100%' src='https://hwang1139.cafe24.com/html/pnei/main.html' allowfullscreen/>"},
        },
        {
            id:1,
            title:"스마트한 컴퓨터 쇼핑몰, 도미넌스",
            subtit:"소프트웨어 뿐이 아니라 하드웨어에도 관심이 많아, 컴퓨터를 판매하는 쇼핑몰",
            firsttxt:"100%",
            secondtxt:"RGB가 들어가있는 모델들은 화려함이 생명이라 전체적으로 깔끔한 디자인, 믿음을 주는 색을 사용하여 디자인",
            thirdtxt:"팝업 로그인창, 상단 메뉴, 상품 리스트, 부품별 선택",
            fourthtxt:"Oversystem사의 홈페이지를 레퍼런스로 구성하였으며, 상품을 최대한 부각",
            figmalk:{ __html: "<iframe width='100%' height='100%' src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F7onpJ9jwufiW0BJtwWtXor%2F%25EB%258F%2584%25EB%25AF%25B8%25EB%2584%258C%25EC%258A%25A4' allowfullscreen/>"},
            shortct:"https://hwang1139.cafe24.com/html/dominc/main.html",
            link:{ __html: "<iframe width='100%' height='100%' src='https://hwang1139.cafe24.com/html/dominc/main.html' allowfullscreen/>"},
        },
        {
            id:2,
            title:"스마트 패턴장부",
            subtit:"기존 런칭중이던 스마트 패턴장부에 3개 페이지와 팝업창 추가",
            firsttxt:"100%",
            secondtxt:"기존 진행했던 컨셉이 있기 때문에 해당 톤 앤 매너에 맞춰 디자인",
            thirdtxt:"SNS로그인, 에러팝업, 메세지 서비스 토글시 메뉴 열림, 세부 날짜 등 팝업으로 선택 등",
            fourthtxt:"주 대상 이용층이 40~50대 장사하시는 분들이기에 너무 이쁘기만 한 디자인 보다는 직관적이고, 기능을 확실히 알아 볼 수 있게 구성",
            figmalk:{ __html: "<iframe width='100%' height='100%' src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FHU7TI8ByPG5tFXzi0693cR%2F%25EC%258A%25A4%25EB%25A7%2588%25ED%258A%25B8%25EC%259E%25A5%25EB%25B6%2580_%25ED%2599%25A9%25EC%259E%25AC%25EC%2598%2581' allowfullscreen/>"},
            shortct:"https://hdomi.github.io/smartpr/views/login.html",
            link:{ __html: "<iframe width='400px' height='800px' src='https://hdomi.github.io/smartpr/views/login.html' allowfullscreen/>"},
        },
        {
            id:3,
            title:"스마트시티 라이브러리",
            subtit:"정부지원 사업으로 진행되었던 프로젝트",
            firsttxt:"100%",
            secondtxt:"정부지원 사업으로 진행되었던 프로젝트로 깔끔한 디자인",
            thirdtxt:"체크리스트를 통한 검색 및 로그인, 로그인시 설정가능한 페이지",
            fourthtxt:"체크리스트를 통한 검색 및 로그인, 로그인시 설정가능한 페이지체크리스트를 통한 검색 및 로그인, 로그인시 설정가능한 페이지체크리스트를 통한 검색 및 로그인, 로그인시 설정가능한 페이지",
            figmalk:{ __html: "<iframe width='100%' height='100%' src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FveX6pqsXFSinb46vasr3RU%2F%25EC%258A%25A4%25EB%25A7%2588%25ED%258A%25B8%25EC%258B%259C%25ED%258B%25B0-%25ED%2591%259C%25EC%25A4%2580-%25EB%259D%25BC%25EC%259D%25B4%25EB%25B8%258C%25EB%259F%25AC%25EB%25A6%25AC-%25EC%25B5%259C%25EC%25A2%2585' allowfullscreen/>"},
            shortct:"https://hdomi.github.io/smartcity/views/main",
            link:{ __html: "<iframe width='100%' height='100%' src='https://hdomi.github.io/smartcity/views/main' allowfullscreen/>"},
        },
        {
            id:4,
            title:"데이터가공 서비스",
            subtit:"이미지를 사이트 내에서 쉽게 가공해주는 사이트",
            firsttxt:"100%",
            secondtxt:"클라이언트 측에서 전달한 레퍼런스를 토대로 활발한 커뮤니케이션을 통해 디자인과 테마 색상을 결정",
            thirdtxt:"이미지 업로드, 요금제 선택, 로그인을 통한 마이페이지 등 여러 기능을 탑재",
            fourthtxt:"크게 메인, 이미지 증강, 마이페이지 등으로 나뉘었으며 사용자의 편의를 위해 확 눈에 띄고, 최대한 직관적인 UI로 구성",
            figmalk:{ __html: "<iframe width='100%' height='100%' src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FbNU6UMwSDL9LPfXeTKdnEw%2F%25ED%258C%25A8%25ED%2584%25B4%25ED%2585%258C%25ED%2581%25AC-%25EB%258D%25B0%25EC%259D%25B4%25ED%2584%25B0%25EA%25B0%2580%25EA%25B3%25B5' allowfullscreen/>"},
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
        const {id,title,subtit,firsttxt,secondtxt,thirdtxt,fourthtxt,figmalk,shortct,link} = pubListIds
        return(
            <div>
                {
                modalVisible && <PubModal visible={modalVisible} closable={true} maskClosable={true} onClose={closeModal}>
                    <div className="pub_detail_inner" id={id}>
                        <div className="cnt_tit">{title}</div>
                        <div className="tit_line"></div>
                        <div className="cnt_sub_tit">{subtit}</div>
                        <div className="text_area des_cnt_sec">
                            <div className="des_cnt">
                                <div className="pub_webview2" name="frame" dangerouslySetInnerHTML={figmalk}/>
                            </div>
                            <div className="des_cnt pub_txt_sec">
                                <table className="pub_table" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td class="txt_txt_sec">기여도</td>
                                        <td className="text_left txt_txt_sec2"> {firsttxt}</td>
                                    </tr>
                                    <tr>
                                        <td class="txt_txt_sec">디자인 방향</td>
                                        <td className="text_left txt_txt_sec2"> {secondtxt}</td>
                                    </tr>
                                    <tr>
                                        <td class="txt_txt_sec">주요기능</td>
                                        <td className="text_left txt_txt_sec2"> {thirdtxt}</td>
                                    </tr>
                                    <tr>
                                        <td class="txt_txt_sec">간단설명</td>
                                        <td className="text_left txt_txt_sec2"> {fourthtxt}</td>
                                    </tr>
                                </table>
                            </div>  
                        </div>
                        <div className="text_area linkarea">
                            <div className="link_txt link_btn" onClick={() => window.open(shortct)}>
                                사이트 바로가기
                            </div>
                        </div>
                        <div className="tit_line"></div>
                        <div className="linkarea2">
                            <div className="mi_show" onClick={()=>togglemiMenu()}>사이트 미리보기<span className={"try_set " + (miOpen ? "reflect" : " ")}> ▼</span></div>
                            <div className={"iframe_f " + (miOpen ? "iframe_f_show" : " ")}>
                                <div className="pub_webview" name="frame" dangerouslySetInnerHTML={link}/>
                            </div>
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
