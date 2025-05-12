import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <WrapperLeftHeader>
            <TitleBox>
                <LeftHeaderTitle>Gun's Portfolio</LeftHeaderTitle>
            </TitleBox>
        </WrapperLeftHeader>
    );
};

export default Header;

const WrapperLeftHeader = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const TitleBox = styled.div`
// 일단 박스로..!
`;

const LeftHeaderTitle = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: #000000;
`;