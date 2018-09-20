import React from 'react';
import styled from 'styled-components';
import bg_icon from '../../assets/bg_icon.png';

const Wrapper = styled.div`
    border: 1px solid #eee;
    padding: 35px 25px;
    box-shadow: 6px 4px 18px rgba(0, 0, 0, 0.08);
    -webkit-transition: all 0.2s ease-in-out 0s;
    -khtml-transition: all 0.2s ease-in-out 0s;
    -moz-transition: all 0.2s ease-in-out 0s;
    -ms-transition: all 0.2s ease-in-out 0s;
    -o-transition: all 0.2s ease-in-out 0s;
    transition: all 0.2s ease-in-out 0s;
    text-align: center;
`;

const Icon = styled.img`
    width: 100px;
    background-image: url(${bg_icon});
    padding: 10px;
    background-size: cover;
    background-position: center center;
`;

const Title = styled.h3`
    font-size: 20px;
    margin-top: 18px;
    margin-bottom: 0;
    color: black;
`;

const Contents = styled.div`
    margin-top: 12px;
    color: black;
`;

const CtaBox = props => (
    <Wrapper>
        <Icon src={props.icon} />
        <Title>{props.title}</Title>
        <Contents>{props.children}</Contents>
    </Wrapper>
);

export default CtaBox;
