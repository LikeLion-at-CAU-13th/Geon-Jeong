import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import Loader from "../components/Loader.jsx";
//import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion } from "framer-motion";

const ChatPage = () => {
    // 채팅내역을 담는 배열
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);


    /** GoogleGenerativeAI 라이브러리를 활용한 API 호출 방법 
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY); // 라이브러리를 활용하여 간단하게 함수형식으로 사용하기 위함
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro"}); // genAI를 통해 사용할 기능이 있는 모델을 선언
    */

    /** 과제 내용 */
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`;
    async function generateContent(prompt) {
        console.log("Prompt sent:", prompt); // Added for debugging
        
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: prompt }] }]
            }),
        });
        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text ?? "응답 없음";
    }


    const handleSend = async () => {
        if (!input.trim()) return;
        const userMsg = { role: "user", content: input};
        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        try {
            /** 수업 내용 */
            //const result = await model.generateContent(input);
            /** 과제 내용 */
            const result = await generateContent(input);

            //const text = result.response?.text() ?? "응답이 없습니다."
            const aiMsg = { role: "assistant", content: result};
            setMessages((prev) => [...prev, aiMsg]);
        } catch(err) {
            console.error(err);
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "오류가 발생했습니다."},
            ]);
        } finally {
            setLoading(false);
        }
    }
    return(
        <PageWrapper>
            <ChatCard
                initial = {{ opacity: 0, y: 40}}
                animate = {{ opacity: 1, y: 40}}
                transition = {{ duration: 0.6 }}
            >
                <Header />
                <Messages>
                    {messages.map((m, i) => (
                        <ChatMessage key={i} role={m.role} content={m.content}/>
                    ))}
                    {loading && <Loader />}
                </Messages>
                <ChatInput value={input} onChange={setInput} onSend={handleSend}/>
            </ChatCard>
        </PageWrapper>
    )
}
export default ChatPage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;           
  background: linear-gradient(135deg, #4e54c8, #8f94fb);
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
`;

const ChatCard = styled(motion.div)`
  display: flex;
  flex-direction: column;

  width: min(92vw, 720px); 
  height: min(80vh, 820px);

  margin: 0 auto;

  background: #fff;
  border-radius: 20px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const Messages = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background: #fafafa;
  overscroll-behavior: contain;
`;