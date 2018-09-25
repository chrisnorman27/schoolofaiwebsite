import React from 'react';
import styled from 'styled-components';
import Shape1 from '../../assets/Shape1.png';
import CloneTitle from './CloneTitle';
import SirajImg from '../../assets/siraj.png';

const Wrapper = styled.div`
    height: 502px;
    background: url(${Shape1});
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
`;

const CenterTitle = styled.div`
    margin: auto;
    width: 100%;
`;

const InstructorGroup = styled.div`
    display: flex;
    justify-content: center;
`;

const Instuctor = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Name = styled.div`
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
`;

const Avatar = styled.img`
    border-radius: 50%;
    cursor: pointer;
`;

const Instructors = () => (
    <Wrapper>
        <CenterTitle>
            <CloneTitle text={'Instructors'} />
        </CenterTitle>
        <InstructorGroup>
            <Instuctor>
                <Avatar src={SirajImg} />
                <Name>Siraj Raval</Name>
            </Instuctor>
        </InstructorGroup>
    </Wrapper>
);

export default Instructors;
