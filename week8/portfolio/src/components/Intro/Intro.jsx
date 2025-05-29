import React from 'react';
import Header from './Header';
import Content from './Content';
import styled from 'styled-components';

const Intro = () => {
    return (
        <WrapperRight>
            <Header />
            <Content />
        </WrapperRight>
    );
};

export default Intro;

const WrapperRight = styled.div`
    width: 524px;
    height: 472px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 5px;
`;