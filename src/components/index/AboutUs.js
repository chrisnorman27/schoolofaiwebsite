import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import CloneTitle from './CloneTitle';
import Shape1 from '../../assets/Shape1.png';
import StatsBox from './StatsBox';

const Wrapper = styled.div`
    height: 1176px;
    padding: 10px 10px 260px 10px;
    background-image: ${props => `url(${props.img})`};
    background-position-x: left;
    background-position-y: 85px;
    background-repeat: no-repeat;
    background-size: auto;
    display: flex;
    flex-direction: column;

    @media (min-width: 700px) {
        flex-direction: row;
        padding-top: 180px;
    }
`;

const Text = styled.div`
    padding: 0 10px;
    flex: 1;

    @media (min-width: 700px) {
        padding: 0 0 0 60px;
    }
`;

const StatsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`;

const ImgWrapper = styled.div`
    flex: 1;

    @media (min-width: 700px) {
        padding-left: 50px;
        padding-top: 100px;
    }
`;

const ImgTop = styled(Img)`
    z-index: 2;
    max-width: 500px;
    margin-bottom: 20px;

    @media (min-width: 700px) {
        position: absolute;
        left: 50px;
        margin-bottom: 0;
    }
`;

const ImgBottom = styled(Img)`
    max-width: 500px;

    @media (min-width: 700px) {
        position: absolute;
        top: -100px;
        left: 130px;
    }
`;

class AboutUs extends React.Component {
    render() {
        return (
            <Wrapper img={Shape1}>
                <ImgWrapper>
                    <ImgTop
                        fluid={
                            this.props.data.aboutUsImg2.childImageSharp.fluid
                        }
                    />
                    <ImgBottom
                        fluid={
                            this.props.data.aboutUsImg1.childImageSharp.fluid
                        }
                    />
                </ImgWrapper>
                <Text>
                    <CloneTitle text={'About Us'} />
                    <p>
                        <strong>
                            Our mission is to offer a world-class AI education
                            to anyone on Earth for free.
                        </strong>
                        <br />
                        Our doors are open to all those who wish to learn. We
                        are a learning community that spans almost every country
                        dedicated to teaching our students how to make a
                        positive impact in the world using AI technology,
                        whether that’s through employment or entrepreneurship.
                    </p>
                    <StatsContainer>
                        <StatsBox number={'800+'} text={'Deans'} />
                        <StatsBox number={'400+'} text={'Cities'} />
                        <StatsBox number={'80+'} text={'Countries'} />
                        <StatsBox
                            number={'1'}
                            text={'Goal To Change The World'}
                        />
                    </StatsContainer>
                </Text>
            </Wrapper>
        );
    }
}

export default props => (
    <StaticQuery
        query={graphql`
            query {
                aboutUsImg1: file(relativePath: { regex: "/aboutus-1.jpg/" }) {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                aboutUsImg2: file(relativePath: { regex: "/aboutus-2.jpg/" }) {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => <AboutUs data={data} {...props} />}
    />
);
