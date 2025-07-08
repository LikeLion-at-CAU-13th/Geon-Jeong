import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Mypage from './pages/Mypage';
import Home from './pages/Home';

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/mypage" element={<Mypage />} />
            </Routes>
        </BrowserRouter>
	</>
  );
}

export default App;
