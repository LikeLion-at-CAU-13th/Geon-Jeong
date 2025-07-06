import styled from "styled-components";
import { getMyPage } from "../apis/user";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// 토큰을 이용해서 정보를 가져오는 페이지
const Mypage = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    // 과제3) 로그아웃버튼
    const onClick = () => {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        alert("로그아웃 되었습니다. 메인페이지로 이동합니다.");
        navigate("/");
    }

    // 과제1) token 만료 시 login페이지로 리렌더링을 위한 Navigate
    const navigate = useNavigate();

    useEffect( () => {
            getMyPage(localStorage.getItem("access"))
    .then((data) => {
        setData(data);
        setLoading(false);
        // 과제1) 디버깅용 출력
        // console.log(localStorage.getItem("access"));
    })
    .catch((error) => {
        // 과제4) 토큰이 만료되었을 경우 자동 로그아웃 후 로그인 페이지로 이동!
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        navigate("/");
    })
}, []);

// 예외 처리가 중요함. -> 초반 페이지 로딩 시 초기화 값이 없을 때, 에러를 방지해줌.
if(loading) return <div>로딩중...</div>
    return (
        <>
            <Wrapper>
                <Title>My page</Title>
                <div>이름 : {data.name} </div>
                <div>나이 : {data.age} </div>

                <BtnWrapper>
                    <button onClick={onClick}>로그아웃</button>
                </BtnWrapper>
            </Wrapper>
        </>
    );
};

export default Mypage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border: 3px solid #89cdf6;
  padding: 30px;
  border-radius: 3%;
  font-size: 20px;
  width: 300px;
  div {
    font-size: 25px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 30px;
  color: #585858;
  font-family: SUITE;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const BtnWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  button {
    font-weight: 800;
    background-color: #89cdf6;
    color: white;
    padding: 19px;
    border-radius: 10px;
    border: none;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 3px 3px skyblue;
      color: black;
      background-color: white;
    }
  }
`;