import { useContext } from 'react';
import { ModalContext, ThemeColorContext } from '../../context/context';
import { Button, Wrapper } from '../layout/common';
import Form from './Form';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isSubmittedAtom } from '../../recoil/atom';
import Modal from './Modal';

const FormSection = () => {
	const mode = useContext(ThemeColorContext);

	//const navigate = useNavigate();
	//const setItSubmitted = useSetRecoilState(isSubmittedAtom);

    // 과제2
    const { openModal } = useContext(ModalContext);

	const handleBtn = () => {
		//setItSubmitted(true);
        openModal();
		//navigate("/mypage");
	}
	return (
		<Wrapper>
			<Form type="home" inputType="이름"/>
			<Form type="email" inputType="이메일"/>
            {/*과제1*/}
            <Form type="gender" inputType="성별"/>
			<Button mode={mode.button} onClick={handleBtn}>
				제출
			</Button>
            <Modal />
		</Wrapper>
	);
};

export default FormSection;