import React from 'react';
import styled from 'styled-components';
import Spinner from '../img/loading.gif';

const Loading =() => {
    const Background = styled.div`
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background: #080f2a;
        z-index: 999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;
    const LoadingText = styled.div`
        text-align: center;
        font-weight:bold;
        margin-top:90px;
    `;
    const LoadingText2 = styled.div`
        text-align: center;
        font-weight:900;
        font-size: 24px;
        margin-top:20px;
        color:#080f2a;
    `;
    const BgInner = styled.div`
        text-align: center;
        background: #fff;
        width: 350px;
        height: 350px;
        border-radius: 50%;
        box-shadow: inset 0px 0px 20px 5px rgba(0,0,0,0.6);
    `;
    
    return (
            <Background>
                <BgInner>
                    <LoadingText>황재영의 포트폴리오에<br/>오신것을 환영합니다</LoadingText>
                    <LoadingText2>ㆍㆍㆍ로딩중ㆍㆍㆍ</LoadingText2>
                    <img src={Spinner} alt="로딩중" width="150px" />
                </BgInner>  
            </Background>
            );
        };
        
export default Loading;