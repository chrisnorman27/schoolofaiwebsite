import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const FullHeightBackground = styled.div`
    height: 100vh;
    width: 100%;
    color: white;
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    position: relative;
    z-index: -2;

    @media (min-width: 700px) {
        padding-left: 50px;
        justify-content: normal;
    }

    &::before {
        background: linear-gradient(to right, #6020d2 0, #2e67f5 100%);
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.46;
        z-index: -1;
    }
`;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: block;
    }
`;

const Header = styled.h1`
    font-weight: 300;
    font-size: 30px;
    color: white;
    text-align: center;

    @media (min-width: 700px) {
        width: 50%;
        font-size: 40px;
        text-align: left;
    }
`;

const Button = styled.button`
    z-index: 7;
    min-width: 150px;
    max-width: 150px;
    white-space: nowrap;
    font-size: 13px;
    line-height: 40px;
    font-weight: 700;
    color: rgb(51, 51, 51);
    text-transform: uppercase;
    background-color: rgb(255, 255, 255);
    border-color: transparent;
    border-radius: 35px;
    outline: none;
    box-shadow: rgb(153, 153, 153) 0px 0px 0px 0px;
    box-sizing: border-box;
    cursor: pointer;
    text-decoration: none;
    visibility: inherit;
    transition: none 0s ease 0s;
    text-align: center;
    margin: 0px;
    padding: 0px;
    letter-spacing: 0px;
    min-height: 0px;
    max-height: none;
    opacity: 1;
    transform-origin: 50% 50% 0px;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    border-width: 0px;

    @media (min-width: 700px) {
        min-width: 222px;
        max-width: 222px;
        line-height: 50px;
    }
`;

class TopImage extends React.Component {
    render() {
        return (
            <FullHeightBackground>
                <Img
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: '-2'
                    }}
                    fluid={this.props.data.backgroundImg.childImageSharp.fluid}
                />
                <Contents>
                    <Header>
                        Our mission is to offer a world-class AI education to
                        anyone on Earth for free.
                    </Header>
                    <Button>Sign Up Here</Button>
                </Contents>
            </FullHeightBackground>
        );
    }
}

export default props => (
    <StaticQuery
        query={graphql`
            query {
                backgroundImg: file(
                    relativePath: { regex: "/Siraj-background-image.png/" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => <TopImage data={data} {...props} />}
    />
);
