import {React} from "react";
import './cnts/cnt.css';
import '../App.css';
import './pages.css';
import { default as useScrollFadeIn } from '../hooks/useScrollFadeIn'
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
            link:"https://hdomi.github.io/pnei/",
            gyd:"100%"
        },
        {
            id:1,
            title:"도미넌스",
            old:"2021.07 ~ 07",
            des:"소프트웨어 뿐이 아니라 하드웨어에도 관심이 많아, 컴퓨터를 판매하는 쇼핑몰을 만들어 보았습니다.",
            link:"https://hwang1139.cafe24.com/html/dominc/main.html",
            gyd:"100%"
        },
        {
            id:2,
            title:"스마트시티 라이브러리",
            old:"2021.12 ~ 01",
            des:"정부지원 사업으로 진행되었던 프로젝트로서 깔끔한 디자인과 퍼블리싱이 관건이었습니다.",
            link:"https://hdomi.github.io/smartcity/",
            gyd:"100%"
        },
        {
            id:3,
            title:"데이터가공 서비스",
            old:"2022.04 ~ 04",
            des:"㈜패턴테크의 첫 런칭 프로젝트로 이미지를 사이트 내에서 쉽게 가공해주는 사이트입니다.",
            link:"https://hdomi.github.io/datacorp/",
            gyd:"100%"
        },
        {
            id:4,
            title:"준비즁",
            old:"알ㄹ아랑라",
            des:"ㅁㄴㅇㅁㅇㅁ",
            link:"ㅁㅁㅁ",
            gyd:""
        },
        {
            id:5,
            title:"여섯번째",
            old:"ㅁㄴㅇㅁㅇㅁ",
            des:"ㅇㅁㄴㅇㅁㅇㅁ",
            link:"ㅁㅁㅁ",
            gyd:""
        },
    ]
    const pubList = webpub_thum.map((item)=>{
        const {id,title,old,des,link,gyd} = item
                return(
                    <a class="pub_cnt_a" href={link} target="_blank"><div className="pub_cnt_wrap">
                        <div className="pub_cnt"  {...animatedItem[id]}>
                            <div className="webpub_txt">
                                <b>{title}<div className="webpub_gyd">기여도 : {gyd}</div></b><br/>
                                <p>{old}<br/><br/><span>{des}</span></p>
                            </div>
                            <img className="webpub_img" alt="배너사진" src={process.env.PUBLIC_URL + '/img/webpub/thumnail/' + id + '.jpg'}/> 
                        </div>
                    </div></a>
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
                        {pubList} <br/><br/><br/><br/><br/><br/> 
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Webpub;
