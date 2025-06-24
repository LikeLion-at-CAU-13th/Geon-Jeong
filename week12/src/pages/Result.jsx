// src/pages/Result.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
    const location = useLocation();
    const result = location.state?.result || "결과 없음";
    const navigate = useNavigate();

    return (
        <div>
            <h2>결과 페이지</h2>
            <p>{result}</p>
            <button onClick={() => navigate("/quiz")}>홈으로</button>
        </div>
    );
};

export default Result;
