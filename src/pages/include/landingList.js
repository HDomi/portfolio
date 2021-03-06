import React, {useState}  from 'react'
import { default as useScrollFadeIn } from '../../hooks/useScrollFadeIn'
import Modal from '../include/Modal'

const LandingList = () => {
    //페이드인 애니메이션
    const animatedItem = {
        0: useScrollFadeIn('up', 1, 0),
        1: useScrollFadeIn('up', 1, 0.2),
        2: useScrollFadeIn('up', 1, 0.3),
        3: useScrollFadeIn('up', 1, 0.4),
        4: useScrollFadeIn('up', 1, 0.5),
        5: useScrollFadeIn('up', 1, 0.6),
        6: useScrollFadeIn('up', 1, 0.7),
        7: useScrollFadeIn('up', 1, 0.8),
        8: useScrollFadeIn('up', 1, 0.9),
    };
    //랜딩페이지 리스트 아이디 생성
    const landListID = [
        {
            id:0,
            title:"네오클릭 이벤트",
            text:"닷네임코리아X네오클릭 이벤트"
        },
        {
            id:1,
            title:"최신인기영화 이벤트",
            text:"연장상품에 따른 영화관람권 증정"
        },
        {
            id:2,
            title:"도메인 이벤트",
            text:"3가지 도메인의 할인 이벤트"
        },
        {
            id:3,
            title:"네번째이미지",
            text:"ddd"
        },
        {
            id:4,
            title:"다섯번째이미지",
            text:"eee"
        },
        {
            id:5,
            title:"여섯번째이미지",
            text:"fff"
        },
        {
            id:6,
            title:"일곱번째이미지",
            text:"ggg"
        },
        {
            id:7,
            title:"여덟번째이미지",
            text:"hhh"
        },
        {
            id:8,
            title:"아홉번째이미지",
            text:"iii"
        }
    ]
     //랜딩 리스트를 누르면 누른 해당 id가져오게 저장
     const [listBtnId, setContent] = useState();
    
     const buttonValueSetting = e => {
         const { id  } = e.target;
         setContent( id );
         openModal();
     };
     //랜딩 리스트 생성
     const landList = landListID.map((item)=>{
     const {id,title,text} = item
                 return(
                     <div className="ld_cnt_wrap" >
                         <div className="ld_cnt"  {...animatedItem[id]}  onClick={buttonValueSetting}>
                             <img className="ld_img" alt="랜딩페이지 썸네일" id={id} src={process.env.PUBLIC_URL + '/img/landing/thumnail/' + id + '.jpg'}/>
                             <div className="ld_cnt_txt">
                                 제목 : {title} <br/>
                                 설명 : {text}
                             </div>
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
    const landImgId = [
        {id:0},
        {id:1},
        {id:2},
    ]
    //모달팝업 내부 이미지를 map으로 모달리스트 생성
    const landImgModal = landImgId.map((landImgIds) => {
    const {id} = landImgIds
    return(
        <div>{
            modalVisible && <Modal
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={closeModal}>
                <img className="land_img" alt="랜딩페이지 썸네일" src={process.env.PUBLIC_URL + '/img/landing/' + id + '.jpg'}/>
            </Modal>}
        </div>
    )
    
    });
   
    return(
        <div className="cnt_inner_wrap2">
            {landList}
            {landImgModal[listBtnId]}
        </div>      
    )
    
}


export default LandingList;