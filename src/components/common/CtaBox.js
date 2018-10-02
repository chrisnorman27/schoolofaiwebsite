import React from 'react';
import styled from 'styled-components';
import bg_icon from '../../assets/bg_icon.png';

const Wrapper = styled.div`
    border: 1px solid #eee;
    padding: 35px 25px;
    box-shadow: 6px 4px 18px rgba(0, 0, 0, 0.08);
    transition: all 0.2s ease-in-out 0s;
    text-align: center;

    &:hover {
        box-shadow: none;
    }
`;

const Icon = styled.img`
    width: 100px;
    background-image: url(${bg_icon});
    padding: 10px;
    background-size: cover;
    background-size: contain;
    background-repeat: no-repeat;
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
        <Icon src={props.icon} alt={'Info box icon'} />
        <Title>{props.title}</Title>
        <Contents>{props.children}</Contents>
    </Wrapper>
);

export default CtaBox;
