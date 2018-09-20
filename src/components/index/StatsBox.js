import React from 'react';
import styled from 'styled-components';

const Number = styled.div`
    background: -webkit-linear-gradient(#6020d2, #2e67f5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    font-size: 50px;
    font-weight: 700;
`;

const Text = styled.div`
    font-size: 16px;
    text-transform: uppercase;
    color: grey;
    font-weight: 400;
`;

const StatsBox = props => (
    <div>
        <Number>{props.number}</Number>
        <Text>{props.text}</Text>
    </div>
);

export default StatsBox;
