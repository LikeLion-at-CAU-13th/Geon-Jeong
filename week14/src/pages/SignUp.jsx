import { useState } from 'react';
import styled from 'styled-components';
import { signup } from '../apis/user';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

const SignUp = () => {
    // 과제 2)
    
    //const [id, setId] = useState("");
    //const onChangeId = (e) => { setId(e.target.value); }
    const [id, onChangeId] = useForm();

    //const [pw, setPw] = useState("");
    //const onChangePw = (e) => { setPw(e.target.value); }
    const [pw, onChangePw] = useForm();
    
    //const [name, setName] = useState("");
    //const onChangeName = (e) => { setName(e.target.value); }
    const [name, onChangeName] = useForm();

    //const [age, setAge] = useState(0);
    //const onChangeAge = (e) => { setAge(e.target.value); }
    const [age, onChangeAge] = useForm();
    
    const navigate = useNavigate();


    const onClick = async () => {
        await signup(id, pw, name, age);
        alert("회원가입이 성공적으로 되었습니다!");
        navigate("/");
    }

    return (
        <>
            <Wrapper>
                <Title>회원가입</Title>
                <Inputs>
                    <div>아이디</div>
                    <input value={id} onChange={onChangeId} />

                    <div>비밀번호</div>
                    <input value={pw} onChange={onChangePw} />

                    <div>이름</div>
                    <input value={name} onChange={onChangeName} />

                    <div>나이</div>
                    <input type='number' value={age} onChange={onChangeAge} />
                </Inputs>
                <button onClick={onClick}>가입하기</button>
            </Wrapper>
        </>
    );
};

export default SignUp;

const Wrapper = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 30px;
  border: 3px solid #89cdf6;
  background: #fafffa;
  padding: 30px;
  button {
    background-color: skyblue;
    color: white;
    font-weight: 700;
    padding: 10px 20px 10px 20px;
    border-radius: 5px;
    border: white;
    &:hover {
      box-shadow: 0 0 3px 3px skyblue;
      color: black;
      background-color: white;
    }
  }
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const Inputs = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 4px;
  div {
    font-size: 14px;
    color: grey;
  }
  input {
    font-size: 20px;
    height: 20px;
    width: 290px;
    border-radius: 10px;
    border: 1px solid #888;
    padding: 10px;
    margin-bottom: 1rem;
    &::placeholder {
      color: darkgray;
      font-size: 20px;
      font-weight: 500;
      font-family: "OTWelcomeRA";
    }
  }
`;
