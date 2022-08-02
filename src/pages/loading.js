import React from 'react';
import styled from 'styled-components';

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
    return (
            <Background>
                <div className="loading_txt" data-text="Loading...">Loading...</div>
            </Background>
            );
        };
        
export default Loading;