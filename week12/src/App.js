import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookList from './pages/BookList';
import styled from 'styled-components';
import BookDetail from './pages/BookDetail';

// 과제 1
import Quiz from './pages/Quiz';
import Result from './pages/Result';

function App() {
  return (
    <AppDom>
      <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/books" element={<BookList />}>
            <Route path=":id" element={<BookDetail />} />
        </Route>
        {/* <과제1> 퀴즈페이지 라우팅 */}
        <Route path="/quiz" element={<Quiz />} />
        {/* <과제1> 결과페이지 라우팅 */}
        <Route path="/result" element={<Result />} />
        
      </Routes>
    </AppDom>
  );
}

export default App;

const AppDom = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
