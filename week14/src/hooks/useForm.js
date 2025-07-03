import { useState } from "react";

// set함수의 반복적인 사용을 방지하기 위한 커스텀 훅
export const useForm = () => {
    const [value, setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value);
    };
    return [value, onChange];
};