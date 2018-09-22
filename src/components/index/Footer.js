import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 518px;
    padding-top: 55px;
`;

const Top = styled.div`
    display: flex;
    padding-bottom: 70px;
`;

const Group = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 30px;
`;

const Title = styled.h3`
    font-size: 16px;
    font-weight: 500;
    color: #333;
    text-transform: uppercase;
    margin-bottom: 17px;
    line-height: 40px;
`;

const ContentRow = styled.div`
    color: #808080;
    line-height: 30px;
    font-size: 16px;
`;

const Bottom = styled.div`
    border-top: 1px solid #eee;
    padding-top: 50px;
`;

const MenuItem = styled.li`
    display: inline-block;
    margin-bottom: 0;
    line-height: 38px;
    padding-right: 38px;
    color: #808080;
`;

const CopyrightContent = styled.div`
    background: #fafafa;
    padding: 15px 30px;
    margin-top: 70px;
`;

const FooterContents = [
    {
        title: 'Contact',
        items: ['hello@sirajraval.com', 'San Francisco, California, USA']
    },
    {
        title: 'School of AI',
        items: ['About Us', 'Press', 'Contact']
    },
    {
        title: 'Useful links',
        items: ['Courses', 'Events', 'Gallery', 'FAQ']
    },
    {
        title: 'Courses',
        items: ['Decentralized Applications', 'Move 37 Course']
    }
];

const Footer = () => (
    <Wrapper>
        <Top>
            {FooterContents.map(group => (
                <Group>
                    <Title>{group.title}</Title>
                    {group.items.map(item => (
                        <ContentRow>{item}</ContentRow>
                    ))}
                </Group>
            ))}
        </Top>
        <Bottom>
            <ul>
                <MenuItem>Home</MenuItem>
                <MenuItem>Courses</MenuItem>
                <MenuItem>School of AI Map</MenuItem>
                <MenuItem>Contact</MenuItem>
            </ul>
        </Bottom>
        <CopyrightContent>The School of AI</CopyrightContent>
    </Wrapper>
);

export default Footer;
