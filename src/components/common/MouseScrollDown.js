import React from 'react';
import styled, { keyframes } from 'styled-components';
import Mouse from '../icons/Mouse';
import Chevron from '../icons/Chevron';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MouseWithExtraSpace = styled(Mouse)`
    margin-bottom: 35px;
`;

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
`;

const BouncyChevron = styled(Chevron)`
    animation: ${bounce} 3s infinite;
`;

const MouseScrollDown = () => (
    <Wrapper>
        <MouseWithExtraSpace />
        <BouncyChevron />
    </Wrapper>
);

export default MouseScrollDown;
