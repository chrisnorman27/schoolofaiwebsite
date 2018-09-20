import React from 'react';
import styled from 'styled-components';
import Shape2 from '../../assets/Shape2.png';
import CloneTitle from './CloneTitle';
import CourseBox from './CourseBox';
import BgImg from '../../assets/Siraj-background-image.png';

const AvailableCoursesContainer = styled.div`
    height: 373px;
    padding: 95px 0 120px 15px;
    background: url(${Shape2});
    background-position-x: right;
    background-position-y: 10%;
    background-repeat: no-repeat;
    background-size: auto;
`;

const PopularCoursesContainer = styled.div`
    height: 468px;
    padding-top: 35px;
`;

const PopularCoursesTitle = styled.h3`
    padding-left: 15px;
    text-transform: uppercase;
    line-height: 30px;
    font-size: 30px;
    font-weight: 700;
    margin: 0 0 7px;
`;

const CoursesList = styled.div`
    display: flex;
    flex-direction: row;
`;

class Courses extends React.Component {
    render() {
        return (
            <>
                <AvailableCoursesContainer>
                    <CloneTitle text={'Available Courses'} />
                </AvailableCoursesContainer>
                <PopularCoursesContainer>
                    <PopularCoursesTitle>Popular Courses</PopularCoursesTitle>
                    <CoursesList>
                        <CourseBox
                            thumbnail={BgImg}
                            author={'hello@sirajraval.com'}
                            title={'Decentralized Applications'}
                            price={'Free'}
                            students={'3050'}
                        />
                        <CourseBox
                            thumbnail={BgImg}
                            author={'hello@sirajraval.com'}
                            title={'Decentralized Applications'}
                            price={'Free'}
                            students={'3050'}
                        />
                    </CoursesList>
                </PopularCoursesContainer>
            </>
        );
    }
}

export default Courses;
