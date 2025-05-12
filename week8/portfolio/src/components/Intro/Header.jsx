import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <WrapperRightHeader>
            <RightHeaderTitle>사이좋은 아기사자들, 🦁멋사월드🦁</RightHeaderTitle>
            <RightHeaderSetting>사생활보호설정‣</RightHeaderSetting>
        </WrapperRightHeader>
    );
};

export default Header;

const WrapperRightHeader = styled.div`
    width: 510px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0px 14px;
`;

const RightHeaderTitle = styled.div`
color: #55B2E4;
    font-size: 16px;
`;

const RightHeaderSetting = styled.div`
    color: #55B2E4;
    font-size: 9px;
`;