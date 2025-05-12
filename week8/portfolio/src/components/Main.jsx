import React from 'react';
import Profile from './Profile/Profile';
import styled from 'styled-components';
import Intro from './Intro/Intro';
import backgorund from '../assets/images/background.png';
import outerbox from '../assets/images/outerbox.png';

const Main = () => {
    return (
        <Background>
            <OuterBox>
                <Wrapper>
                    <Profile />
                    <Intro />
                </Wrapper>
            </OuterBox>
        </Background>
    );
};

export default Main;

const Background = styled.div`
    width: 1024px;
    height: 600px;
    background-image: url(${backgorund});
    padding: 20px 0px 0px 20px;
`;
const OuterBox = styled.div`
    width: 808px;
    height: 544px;
    background-image: url(${outerbox});
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 32px 0px 0px 32px;
`;