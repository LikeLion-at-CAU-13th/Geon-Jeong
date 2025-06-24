import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState({});
    const navigate = useNavigate();

    // 정답
    const correctAnswers = {
        0: "2003.04.11",
        1: "소프트웨어학부",
        2: "forsxygrave",
        3: "HyperText Markup Language",
        4: "8"
    };

    useEffect(() => {
        axios.get("https://week12-api-1cc7.onrender.com/api/questions")
            .then(res => setQuestions(res.data))
            .catch(err => console.error("문제 불러오기 실패:", err));
    }, []);

    const handleChange = (questionId, answer) => {
        setUserAnswers(prev => ({
            ...prev,
            [questionId]: answer
        }));
    };

    const handleSubmit = async () => {
        const answersArray = Object.entries(userAnswers).map(([id, answer]) => ({
            id: parseInt(id),
            answer
        }));

        // 스코어 계산
        let score = 0;
        answersArray.forEach(({ id, answer }) => {
            if (correctAnswers[id] === answer) score++;
        });

        // POST
        try {
            await axios.post("https://week12-api-1cc7.onrender.com/api/answers", {
                answers: answersArray
            });

            navigate("/result", { state: { score } });
        } catch (err) {
            console.error("답안 제출 실패:", err);
            alert("모든 문제를 풀고 제출해주세요.");
        }
    };

    return (
        <div>
            <h2>퀴즈</h2>
            {questions.map((q) => (
                <div key={q.id}>
                    <p>{q.question}</p>
                    {q.answers.map((a, idx) => (
                        <label key={idx}>
                            <input
                                type="radio"
                                name={`question-${q.id}`}
                                value={a}
                                onChange={() => handleChange(q.id, a)}
                                checked={userAnswers[q.id] === a}
                            />
                            {a}
                        </label>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit}>제출</button>
        </div>
    );
};

export default Quiz;
