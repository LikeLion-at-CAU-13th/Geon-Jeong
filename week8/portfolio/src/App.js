import React from 'react';
import MainPage from './pages/MainPage';
import { Routes, Route } from 'react-router-dom';
// import { GlobalStyle } from './styles/globalStyle';
import {createGlobalStyle} from 'styled-components';

function App() {
  return (
    <div>
      <div></div>
        <GlobalStyle/>
        <Routes>
            <Route path="/" element={<MainPage />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/album" element={<Album />} /> */}
            </Routes>
    </div>
  );
}

export default App;

// 세션 때마냥..fucking 'global style'이 적용이 안돼서.. 여기다가 우선.. 똑같이 시도했는데 안되느요 
const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
}
body {
    font-family: 'Anthony', sans-serif;
    background-color: #red;
    font-weight: 500;
}
`;
