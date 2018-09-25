import React from 'react';
import styled from 'styled-components';
import CloneTitle from './CloneTitle';
import CtaBox from './CtaBox';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';

const Wrapper = styled.div`
    height: 1021px;
    padding: 15px 10px 200px 10px;
    display: flex;
`;

const Text = styled.div`
    padding: 150px 110px 0px 60px;
    flex: 1;
`;

const CtaContainer = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 50px;
    cursor: pointer;
`;

const ContactButton = styled.button`
    display: inline-block;
    border-radius: 25px;
    border: 1px solid;
    padding: 0 30px;
    margin-top: 30px;
    line-height: 40px;
    color: #2575fc;
    cursor: pointer;
`;

class FindYourLocal extends React.Component {
    render() {
        return (
            <>
                <Wrapper>
                    <Text>
                        <CloneTitle
                            text={'Find Your Local School of AI Chapter'}
                        />
                        <p>
                            <strong>
                                School of AI Deans are an honorary group of
                                individuals who represent the School of AI in
                                online and offline communities worldwide.
                            </strong>
                            <br />
                            They are responsible for helping inspire and educate
                            developers to build Artificial Intelligence in their
                            local communities. Deans are guardians of our core
                            values and mission, they live to serve developers
                            everywhere. Contact your local Dean to attend the
                            next School of AI class in your community.
                        </p>
                        <ContactButton>Contact</ContactButton>
                    </Text>
                    <CtaContainer>
                        <CtaBox icon={icon2} title={'Find a Local Chapter'}>
                            Find your nearest local School of AI to connect with
                            like-minded wizards.
                        </CtaBox>
                        <CtaBox icon={icon4} title={'Learn More'}>
                            Contact us for more information about The School of
                            AI
                        </CtaBox>
                        <CtaBox icon={icon3} title={'Donate'}>
                            Contact us to find out how you can Donate to The
                            School of AI.
                        </CtaBox>
                        <CtaBox icon={icon1} title={'Become a Dean'}>
                            Want to become a School of AI Dean for your city?
                            Fill out this form, and let's get started.
                        </CtaBox>
                    </CtaContainer>
                </Wrapper>
            </>
        );
    }
}

export default FindYourLocal;
