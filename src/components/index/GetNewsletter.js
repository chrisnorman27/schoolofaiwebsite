import React from 'react';
import styled from 'styled-components';
import BgImg from '../../assets/getnewsletterbg.jpg';

const Wrapper = styled.div`
    height: 666px;
    background: url(${BgImg});
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h2`
    color: #fff;
    font-size: 50px;
    font-weight: 200;
    text-transform: none;
`;

const Form = styled.form`
    margin-top: 35px;
`;

const Email = styled.input`
    background-color: transparent;
    width: 375px;
    max-width: 100%;
    color: #fff;
    font-weight: 300;
    border: none;
    position: relative;
    z-index: 1;
    font-size: 18px;
    border-bottom: 1px solid #eee;
    margin-right: 30px;
`;

const Submit = styled.input`
    color: #fff;
    background-color: #0356e7;
    text-transform: uppercase;
    font-size: 13px;
    line-height: 30px;
    padding: 5px 25px;
    font-weight: 700;
    margin-left: -5px;
    border-radius: 0;
    box-shadow: none;
    border: 1px solid #2575fc;
    transition: all 0.3s;

    &:hover {
        opacity: 0.9;
    }
`;

const GetNewsletter = () => (
    <Wrapper>
        <Title>Get Newsletter</Title>
        <Form>
            {/* <label>Email address</label> */}
            <Email type={'email'} placeholder={'Email address'} />
            <Submit type={'submit'} value={'Get It Now'} />
        </Form>
    </Wrapper>
);

export default GetNewsletter;
