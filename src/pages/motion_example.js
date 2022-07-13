import {React} from "react";
import './cnts/cnt.css';
import '../App.css';
import './pages.css';
import { motion } from 'framer-motion';

const Main =() => {

const boxVariants = {
    start: {opacity: 0,scale: 0.5,},
    end: {opacity: 1,scale: 1,transition: 
    {
        type: "spring",
        duration: 0.5,
        bounce: 0.5,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
const circleVariants = {
    start: {opacity: 0,y: 20,},
    end: {opacity: 1,y: 0,},
};
    return(
        <div className="cnt_wrap">
            <div className="cnt">
                <div className="cnt_tit">이 홈페이지에 대하여..</div>
                <div className="tit_line"></div>
                <div className="cnt_sub_tit">HJY's Portfolio</div>
                <div className="cnt_sec main_sec">
                    <div className="text_area">
                        포트폴리오를 만들 계획을 하던중,<br/>흔하고 화려한 포트폴리오가 아닌, 블로그 같은 친숙하고 깔끔한 디자인을
                        계획했습니다.<br/><br/> 그리하여 디자인 시작.
                    </div>
                    <motion.div  variants={boxVariants} initial="start" animate="end" dangerouslySetInnerHTML={{ __html: "<iframe style='border: 1px solid rgba(0, 0, 0, 0.1); margin-top:30px;' width='100%' height='350px' src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FdwJcOkbVxk5F0HqIv46HxW%2FDomi_Page' allowfullscreen/>"}} />
                    <div className="text_area">
                        피그마를 통해 디자인을 하였으니 전체적인 흐름도를 한번 더 정리합니다.
                    </div>
                    <div className="usehistory_box">
                    <motion.div className="use_box" variants={boxVariants} initial="start" animate="end">
                        <motion.div className="use_circle" variants={circleVariants} >1</motion.div>
                        <motion.div className="use_circle" variants={circleVariants} >2</motion.div>
                        <motion.div className="use_circle" variants={circleVariants} >3</motion.div>
                        <motion.div className="use_circle" variants={circleVariants} >4</motion.div>
                        <motion.div className="use_circle" variants={circleVariants} >5</motion.div>
                        <motion.div className="use_circle" variants={circleVariants} >6</motion.div>
                    </motion.div>
                    </div>
                    <div className="text_area">
                        평소에는 일반적인 html, css, js를 통해 만들었지만 이번엔<br/>리액트를 통해 만들어보도록 합니다.
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Main;
