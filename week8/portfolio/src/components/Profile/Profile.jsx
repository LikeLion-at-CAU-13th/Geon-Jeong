import React from 'react';
import Header from './Header';
import Body from './Body';
import styled from 'styled-components';

const Profile = () => {
    return (
        <WrapperLeft>
            <Header />
            <Body />
        </WrapperLeft>
    );
};

export default Profile;

const WrapperLeft = styled.div`
    width: 208px;
    height: 472px;
    display: flex;
    flex-direction: column;
`;