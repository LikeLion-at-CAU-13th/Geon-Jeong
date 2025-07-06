import styled from "styled-components";
import { getMyPage } from "../apis/user";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// 토큰을 이용해서 정보를 가져오는 페이지
const Mypage = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

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
        // 과제1) 토큰이 만료되었을 경우 로그인 페이지로!
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
