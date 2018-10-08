import React from 'react';
import styled from 'styled-components';
import Shape2 from '../../assets/Shape2.png';
import CloneTitle from './CloneTitle';
import CourseBox from './CourseBox';
import { StaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';

const AvailableCoursesContainer = styled.div`
    min-height: 807px;
    padding: 95px 0 120px 15px;
    background: url(${Shape2});
    background-position-x: right;
    background-position-y: 10%;
    background-repeat: no-repeat;
    background-size: auto;
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
    flex-direction: column;

    @media (min-width: 700px) {
        flex-direction: row;
    }
`;

const Courses = ({ data }) => {
    const courses = get(data, 'allCoursesYaml.edges');
    const thumbnail = get(data, 'backgroundImg.childImageSharp.fluid');
    return (
        <>
            <AvailableCoursesContainer>
                <CloneTitle text={'Available Courses'} />
                <PopularCoursesTitle>Popular Courses</PopularCoursesTitle>
                <CoursesList>
                    {courses.map(course => (
                        <CourseBox
                            key={course.node.title}
                            thumbnail={thumbnail}
                            author={course.node.instructor.email}
                            title={course.node.title}
                            price={'Free'}
                            students={course.node.students}
                        />
                    ))}
                </CoursesList>
            </AvailableCoursesContainer>
        </>
    );
};

export default props => (
    <StaticQuery
        query={graphql`
            query {
                allCoursesYaml {
                    edges {
                        node {
                            id
                            title
                            students
                            instructor {
                                id
                                email
                            }
                        }
                    }
                }
                backgroundImg: file(
                    relativePath: { regex: "/Siraj-background-image.png/" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 340) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => <Courses data={data} {...props} />}
    />
);
