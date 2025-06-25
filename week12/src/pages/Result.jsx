import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const score = location.state?.score;

    const [message, setMessage] = useState("");

    useEffect(() => {
        if (score === undefined) {
            alert("점수 정보가 없습니다.");
            navigate('/');
            return;
        }

        axios.get(`https://week12-api-1cc7.onrender.com/api/result?score=${score}`)
            .then(res => setMessage(res.data.message))
            .catch(err => {
                console.error("결과 조회 실패:", err);
                setMessage("결과를 불러오는 데 실패했습니다.");
            });
    }, [score, navigate]);

    return (
        <div>
            <h2>결과 페이지</h2>
            <p>점수: {score} / 5</p>
            <p>{message}</p>
            <button onClick={() => navigate("/")}>홈으로</button>
        </div>
    );
};

export default Result;
