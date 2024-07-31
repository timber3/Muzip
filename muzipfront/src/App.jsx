import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Community from './pages/Community';
import Sheet from './pages/Sheet';
import Band from './pages/Band';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import { useState, createContext } from 'react';

export const LogInStateContext = createContext();
function App() {
  // 로그인 여부
  const [isLogin, setIsLogin] = useState(false);
  // 회원 가입
  // 회원 탈퇴

  return (
    <>
      <LogInStateContext.Provider value={isLogin}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Community" element={<Community />}></Route>
          <Route path="/Sheet" element={<Sheet />}></Route>
          <Route path="/Band" element={<Band />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </LogInStateContext.Provider>
    </>
  );
}

export default App;
