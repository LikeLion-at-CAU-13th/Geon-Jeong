// 과제2
import { useContext } from "react";
import { ModalContext, ThemeColorContext } from "../../context/context.js";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userNameAtom, emailAtom, genderAtom, isSubmittedAtom } from "../../recoil/atom.js";
import { Button } from "../layout/common.js";

const Modal = () => {
  const { isOpen, closeModal } = useContext(ModalContext);
  const navigate = useNavigate();

  const name = useRecoilValue(userNameAtom);
  const email = useRecoilValue(emailAtom);
  const gender = useRecoilValue(genderAtom);
  // 테마 적용
  const theme = useContext(ThemeColorContext);

  const setItSubmitted = useSetRecoilState(isSubmittedAtom);

  if (!isOpen) return null;

  const handleConfirm = () => {
    setItSubmitted(true);
    closeModal();
    navigate("/mypage");
  };

  return (
    <div style={styles.overlay}>

        <div style={styles.modal}>
            <h2>입력한 정보가 맞나요?</h2>
            <p>이름: {name}</p>
            <p>이메일: {email}</p>
            <p>성별: {gender}</p>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
                <Button style={{ backgroundColor: theme.main }} onClick={handleConfirm} >확인</Button>
                <Button style={{ backgroundColor: theme.main }} onClick={closeModal}>취소</Button>
            </div>
        </div>
    </div>
  );
};

export default Modal;

const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex", justifyContent: "center", alignItems: "center",
    zIndex: 999
  },
  modal: {
    background: "#fff",
    padding: 24,
    borderRadius: 8,
    width: 300
  }
};
