import React, {Component} from 'react'


class LandingList extends Component {
    menuState = {
        menu: [
            {
                id:0,
                title:"첫번째이미지",
                text:"aaa"
            },
            {
                id:1,
                title:"두번째이미지",
                text:"bbb"
            },
            {
                id:2,
                title:"세번째이미지",
                text:"ccc"
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
    }
    
    render(){
        return(
            <div className="cnt_inner_wrap2">
                    {
                        this.menuState.menu.map((item)=>{
                            const {id,title,text} = item
                            return(
                                <div className="ld_cnt_wrap" >
                                    <div className="ld_cnt" id={id} onClick={() => window.open(process.env.PUBLIC_URL + '/img/landing/' + id + '.jpg', '_blank')}>
                                        <img className="ld_img" alt="랜딩페이지 썸네일" src={process.env.PUBLIC_URL + '/img/landing/thumnail/' + id + '.jpg'}/>
                                        <div className="ld_cnt_txt">
                                            제목 : {title} <br/>
                                            설명 : {text}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>      
        )
    }
}

export default LandingList;