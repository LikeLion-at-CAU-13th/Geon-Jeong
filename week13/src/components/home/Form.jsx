import React from 'react';
import { useSetRecoilState } from 'recoil';
import { emailAtom, userNameAtom } from '../../recoil/atom';

const Form = ({type, inputType}) => {
    const setUserName = useSetRecoilState(userNameAtom);
    const setEmail = useSetRecoilState(emailAtom);

    //이 형태는 Input 쓸 때 자주 쓰니 암기해둬라 그리고 커스텀 어쩌고 찾아보기
    const onChange = (e) => {
        const value = e.target.value;
        if (inputType === "이름"){
            setUserName(value);
        } else if(inputType === "이메일"){
            setEmail(value);
        }
    }

    return (
        <>
            <div>{inputType}</div>
            {/*onChage에 대해서 자세히*/}
            <input type={type} onChange={onChange} />
        </>
    );
};

export default Form;