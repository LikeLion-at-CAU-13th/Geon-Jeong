import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        const result = answer.trim() === "React" ? "정답입니다!" : "틀렸습니다!";
        navigate("/result", { state: { result } });
    };

    return (
        <div>
            <h2>퀴즈 페이지</h2>
            <p>Q. 프론트엔드 개발에서 자주 사용되는 라이브러리 이름은?</p>
            <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="정답 입력"
            />
            <button onClick={handleSubmit}>제출</button>
        </div>
    );
};

export default Quiz;
