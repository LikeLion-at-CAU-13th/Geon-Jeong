import { useSetRecoilState } from 'recoil';
import { emailAtom, userNameAtom, genderAtom } from '../../recoil/atom';

const Form = ({type, inputType}) => {
    const setUserName = useSetRecoilState(userNameAtom);
    const setEmail = useSetRecoilState(emailAtom);
    // 과제1
    const setGender = useSetRecoilState(genderAtom);

    //이 형태는 Input 쓸 때 자주 쓰니 암기해둬라 그리고 커스텀 어쩌고 찾아보기
    const onChange = (e) => {
        const value = e.target.value;
        if (inputType === "이름"){
            setUserName(value);
        } else if(inputType === "이메일"){
            setEmail(value);
            console.log(type);
        } else if (inputType === '성별') {
            setGender(value);
            //console.log(value);
        }
        
    }

    return (
        <>
            <div style={{ fontWeight: 'bold' }}>{inputType}</div>
            {type === 'gender' ? (
                <div style={{display: 'flex'}}>
                    <input type="radio" name="gender" value="남성" onChange={onChange} />남성
                    <input type="radio" name="gender" value="여성" onChange={onChange} />여성
                </div>) : (<input type={type} onChange={onChange} />
            )}
            <br></br>
        </>
    );
};

export default Form;