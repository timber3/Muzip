import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Community from './pages/Community';
import Sheet from './pages/Sheet';
import Band from './pages/Band';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

function App() {
  // 로그인 여부
  // 회원 가입
  // 회원 탈퇴

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Community" element={<Community />}></Route>
        <Route path="/Sheet" element={<Sheet />}></Route>
        <Route path="/Band" element={<Band />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
