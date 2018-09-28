import React from 'react';
import styled from 'styled-components';
import CloneTitle from './CloneTitle';
import Shape1 from '../../assets/Shape1.png';
import AboutUs1 from '../../assets/aboutus-1.jpg';
import AboutUs2 from '../../assets/aboutus-2.jpg';
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

class AboutUs extends React.Component {
    render() {
        return (
            <Wrapper img={Shape1}>
                <div style={{ flex: '1' }}>
                    <img src={AboutUs2} />
                    <img src={AboutUs1} />
                </div>
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

export default AboutUs;
