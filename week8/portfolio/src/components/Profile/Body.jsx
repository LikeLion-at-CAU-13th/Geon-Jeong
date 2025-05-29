import React from 'react';
import gunPic from '../../assets/images/gun_pic.png';
import styled from 'styled-components';



const Body = () => {
    return (
    <WrapperLeftBody>
        {/* Profile image and info */}
        <LeftBodyHeader>
            <ProfileImg src={gunPic} alt="Profile" />
            <LeftBodyHeaderLine></LeftBodyHeaderLine>
        </LeftBodyHeader>

        <LeftBodyProfile>
            <Element><i className="fa-regular fa-face-smile"></i> 이름: 정건</Element>
            <Element><i className="fa-regular fa-id-card"></i> 학과: 전자전기공학부</Element>
            <Element><i className="fa-regular fa-chess-knight"></i> 직무: 프론트엔드</Element>
            <Element><i className="fa-solid fa-phone"></i> Phone: 010-5894-5533</Element>
            <Element><i className="fa-regular fa-envelope"></i> E-mail: junggun28@gmail.com</Element>
            <Element><i className="fa-brands fa-instagram"></i> 인스타그램: @jxgxeon</Element>
        </LeftBodyProfile>

        <LeftBodyFooter>
            <WrapperFeel>
            <LeftBodyFooterHeader>오늘의 기분</LeftBodyFooterHeader>
            <Feeling>
                <option>기쁨 😄</option>
                <option>화남 😡</option>
                <option>슬픔 😭</option>
            </Feeling>
            </WrapperFeel>
        </LeftBodyFooter>
    </WrapperLeftBody>
    );
};

export default Body;

const WrapperLeftBody = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid gray;
    border-radius: 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 30px;
`;

const LeftBodyHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const ProfileImg = styled.img`
    background-color: rgb(209, 209, 209);
    border-radius: 15px;
`

const LeftBodyHeaderLine = styled.div`
    border-top: 1px dotted black;
    margin: 12px 0px;
`;

const LeftBodyProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    font-size: 9px;
    color: #999999;
`;

const Element = styled.div`
    margin: 5px 0px;
    font-size: 10px;
    color: #000000;
`;

const LeftBodyFooter = styled.div `
    width: 100%;
    color: #000000;
`

const WrapperFeel = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const LeftBodyFooterHeader = styled.div `
    margin-bottom: 5px;
    font-size: 11px;
`

const Feeling = styled.select `
    background-color: #FFFFFF;
    width: 140px;
    height: 18px;
    font-size: 11px;
`