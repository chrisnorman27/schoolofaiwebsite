import React from 'react';
import styled from 'styled-components';
import Shape1 from '../../assets/Shape1.png';
import CloneTitle from './CloneTitle';
import SirajImg from '../../assets/siraj.png';
import Facebook from '../icons/Facebook';
import LinkedIn from '../icons/LinkedIn';
import Twitter from '../icons/Twitter';

const Wrapper = styled.div`
    height: 502px;
    background: url(${Shape1});
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    padding-top: 30px;
`;

const CenterTitle = styled.div`
    width: 100%;
    text-align: center;
`;

const InstructorGroup = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`;

const InstuctorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Name = styled.div`
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
`;

const Avatar = styled.div`
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    background-image: ${props => `url(${props.img})`};
    width: 200px;
    height: 200px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
    cursor: ${props => (props.hover ? 'grabbing' : 'normal')};

    &::before {
        content: '';
        background-color: #2575fc;
        display: block;
        z-index: 5;
        position: absolute;
        opacity: ${props => (props.hover ? '0.8' : '0')};
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        transition: all 0.3s;
        max-width: 200px;
        max-height: 200px;
        margin: auto;
        width: 100%;
    }
`;

const Icons = styled.div`
    z-index: 10;
    transition: all 0.3s;
    opacity: ${props => (props.hover ? '1' : '0')};
`;

const Icon = styled.a`
    margin: 0 5px;
    cursor: pointer;
`;

class Instructor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
    }

    onMouseEnter = () => {
        this.setState({ hover: true });
    };

    onMouseLeave = () => {
        this.setState({ hover: false });
    };

    render() {
        return (
            <InstuctorWrapper
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                <Avatar img={SirajImg} hover={this.state.hover}>
                    <Icons hover={this.state.hover}>
                        <Icon>
                            <Facebook />
                        </Icon>
                        <Icon>
                            <Twitter />
                        </Icon>
                        <Icon>
                            <LinkedIn />
                        </Icon>
                    </Icons>
                </Avatar>
                <Name>Siraj Raval</Name>
            </InstuctorWrapper>
        );
    }
}

class Instructors extends React.Component {
    render() {
        return (
            <Wrapper>
                <CenterTitle>
                    <CloneTitle text={'Instructors'} />
                </CenterTitle>
                <InstructorGroup>
                    <Instructor />
                </InstructorGroup>
            </Wrapper>
        );
    }
}

export default Instructors;
