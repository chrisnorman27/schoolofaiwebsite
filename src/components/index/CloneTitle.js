import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    margin-bottom: 20px;
    margin: 0 0 30px;
    padding-top: 42px;
    padding-bottom: 19px;
`;

const Title = styled.h3`
    font-size: 32px;
    font-weight: 400;
    text-transform: capitalize;
    position: relative;
    z-index: 1;
    display: inline-block;
`;

const TitleCloned = styled.div`
    font-size: 50px;
    line-height: 70px;
    font-weight: 700;
    width: 100%;
    opacity: 0.05;
    position: absolute;
    bottom: 45px;
    color: #333;
    text-transform: capitalize;
    left: 10px;
`;

const CloneTitle = props => (
    <Wrapper>
        <Title>{props.text}</Title>
        <TitleCloned>{props.text}</TitleCloned>
    </Wrapper>
);

export default CloneTitle;
