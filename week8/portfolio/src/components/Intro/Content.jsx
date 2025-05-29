import React from 'react';
import styled from 'styled-components';
import LinkImg from '../../assets/images/picture2.jpg';

const Content = () => {
    return (
        <WrapperRightBody>
            <RightBodyHeader>
                <RightBodyTitle>
                <ContentsTitle>한 줄 소개</ContentsTitle>
                <ContentsSubtitle>당부의 말</ContentsSubtitle>
                </RightBodyTitle>
                <DivideLine></DivideLine>
                <RightBodyContents>
                안녕하세요. 정건이라고 합니다. 서로 부족한 부분을 채워서 함께 성장해나가요!!! APD. 카공할 분 연락주세요. 언제든지 달려갑니다. 잘부탁드립니다~!
                </RightBodyContents>
            </RightBodyHeader>
        <RightBodyFooter>
            <RightBodyTitle>
            <ContentsTitle>Github 링크</ContentsTitle>
            <ContentsSubtitle>+"성진우"를 누르면 연결됩니다" PS. "일어나라"</ContentsSubtitle>
            </RightBodyTitle>
            <RightBodyContents>
            <Github href="https://github.com/gun587330" target="_blank">
                <RightBodyContentsImg src = {LinkImg} alt="Github" />
            </Github>
            </RightBodyContents>
        </RightBodyFooter>
    </WrapperRightBody>
    );
};

export default Content;

const WrapperRightBody = styled.div`
    width: 510px;
    height: 445px;
    border: 1px solid gray;
    border-radius: 15px;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const RightBodyHeader = styled.div`
    width: 100%;
    height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const RightBodyTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ContentsTitle = styled.span`
    color: #55b2e4;
    font-size: 13px;
    font-weight: 700px;
`;

const ContentsSubtitle = styled.span`
    font-size: 8px;
    padding-left: 5px;
`;

const DivideLine = styled.div`
    width: 100%;
    border-top: 1px solid gray;
`;

const RightBodyContents = styled.div`
    padding-top: 20px;
    font-size: 11px;
    color: gray;
`;

const RightBodyFooter = styled.div`
    width: 100%;
    height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Github = styled.a`
    width: 458px;
    height: 225px;
    border-radius: 15px;
`;

const RightBodyContentsImg = styled.img`
    width: 458px;
    height: 225px;
    border-radius: 15px;
`;