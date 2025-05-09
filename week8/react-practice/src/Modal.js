import React from 'react';
import styled from 'styled-components';

const Modal = (props) => {
    return (
        <ModalBackground>
            <Container>
                <div>이름은 {props.name}입니다.</div>
                <div>취미는 {props.hobby}입니다.</div>
                <div>제가 좋아하는 운동은 {props.favoriteSports}입니다.</div>
                <button onClick={() => props.setModal(false)}>죽기</button>
            </Container>
        </ModalBackground>
    );
};

export default Modal;

const ModalBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  background-color: skyblue;
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `