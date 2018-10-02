import React from 'react';
import styled from 'styled-components';
import MultiplePerson from '../icons/MultiplePerson';
import Img from 'gatsby-image';

const Wrapper = styled.div`
    height: 356px;
    width: 280px;
    padding: 0;
    float: left;
    padding-top: 0 !important;
    margin: 0 15px 40px;
    background: white;
`;

const Item = styled.div`
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
        box-shadow: 6px 4px 18px rgba(0, 0, 0, 0.08);
    }
`;

const Thumbnail = styled.div`
    margin: 0;
    overflow: hidden;
`;

const ThumbImg = styled(Img)`
    margin: 0;
    width: 100%;
    height: auto;
    display: block;
    transition: all 0.5s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

const Content = styled.div`
    padding-top: 15px;
    line-height: 25px;
    border: 1px solid #e5e5e5;
    border-top: 0;
    padding: 0;
    text-align: left;
`;

const Author = styled.div`
    font-size: 14px;
    font-weight: 400;
    padding-top: 7px;
    color: #2575fc;
    padding-left: 20px;
`;

const Title = styled.div`
    font-size: 18px;
    margin-top: 5px;
    font-weight: 400;
    line-height: 25px;
    margin: 11px 0 22px;
    height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
    color: #333;
    padding-left: 20px;
`;

const Metadata = styled.div`
    margin-left: -20px;
    margin-right: -20px;
    padding: 8px 20px 2px;
    overflow: hidden;
    position: relative;
    display: block;
    margin: 0;
    background: white;
`;

const Price = styled.div`
    float: left;
    margin-right: 0;
    display: inline-block;
    line-height: 30px;
    color: #ccc;
    padding: 0;
    border: 0;
    font-style: normal;
    font-size: inherit;
    color: #00d637;
    font-size: 18px;
    font-weight: 500;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 1px;
        height: 1px;
        width: 100%;
        background: #e5e5e5;
    }
`;

const Students = styled.div`
    color: #999;
    padding: 0;
    border: 0;
    line-height: 30px;
    display: inline-flex;
    align-items: center;
    float: right;
    margin-right: 0;
    font-size: 14px;
    font-weight: 400;
`;

const CourseBox = props => (
    <Wrapper>
        <Item>
            <Thumbnail>
                <ThumbImg fluid={props.thumbnail} />
            </Thumbnail>
            <Content>
                <Author>{props.author}</Author>
                <Title>{props.title}</Title>
                <Metadata>
                    <Price>{props.price}</Price>
                    <Students>
                        <MultiplePerson style={{ marginRight: '5px' }} />
                        {props.students}
                    </Students>
                </Metadata>
            </Content>
        </Item>
    </Wrapper>
);

export default CourseBox;
