import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Wrapper = styled.div`
    position: relative;
    height: 666px;
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

    @media (max-width: 356px) {
        // fix for very small screens
        margin-left: 30px;
    }
`;

const Email = styled.input`
    background-color: transparent;
    max-width: 100%;
    width: 200px;
    color: #fff;
    font-weight: 300;
    border: none;
    position: relative;
    font-size: 18px;
    z-index: 1;
    border-bottom: 1px solid #eee;
    margin-right: 30px;

    @media (min-width: 700px) {
        width: 375px;
    }
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
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }

    @media (max-width: 356px) {
        // fix for very small screens
        margin-top: 20px;
    }
`;

const GetNewsletter = ({ data }) => (
    <Wrapper>
        <Img
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                zIndex: '-2'
            }}
            fluid={data.backgroundImg.childImageSharp.fluid}
        />
        <Title>Get Newsletter</Title>
        <Form>
            <label style={{ display: 'none' }}>Email Address</label>
            <Email type={'email'} placeholder={'Email address'} />
            <Submit type={'submit'} value={'Get It Now'} />
        </Form>
    </Wrapper>
);

export default props => (
    <StaticQuery
        query={graphql`
            query {
                backgroundImg: file(
                    relativePath: { regex: "/getnewsletterbg.jpg/" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => <GetNewsletter data={data} {...props} />}
    />
);
