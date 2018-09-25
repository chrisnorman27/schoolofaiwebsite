import React from 'react';
import styled from 'styled-components';
import BgImage from '../../assets/Siraj-background-image.png';

const FullHeightBackground = styled.div`
    height: 100vh;
    width: 100%;
    padding-left: 50px;
    background-image: ${props => `url(${props.img})`};
    background-size: cover;
    color: white;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background-position: center center;
    position: relative;
    z-index: -2;

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

const Header = styled.h1`
    font-weight: 300;
    font-size: 40px;
    width: 50%;
    color: white;
`;

const Button = styled.button`
    z-index: 7;
    min-width: 222px;
    max-width: 222px;
    white-space: nowrap;
    font-size: 13px;
    line-height: 50px;
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
`;

class TopImage extends React.Component {
    render() {
        return (
            <FullHeightBackground img={BgImage}>
                <div>
                    <Header>
                        Our mission is to offer a world-class AI education to
                        anyone on Earth for free.
                    </Header>
                    <Button>Sign Up Here</Button>
                </div>
            </FullHeightBackground>
        );
    }
}

export default TopImage;
