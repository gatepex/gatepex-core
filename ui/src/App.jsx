import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// GlobalStyles
import GlobalStyles from './GlobalStyles';

// pages
import Main from './pages/Main';
import Databases from './pages/Databases';
import Database from "./pages/Database"
import Login from './pages/Login';
import Connection from './pages/Connection';
import Apis from './pages/Apis';
import ProjectSetting from './pages/ProjectSetting';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Main />}></Route>
	
        {/* databases */}
        <Route path="/databases" element={<Databases />}></Route>

        {/* 데이터베이스 */}
        <Route path="/database" element={<Database />}></Route>

        {/* APIs */}
        <Route path="/apis" element={<Apis />}></Route>

        {/* 설정 */}
        <Route path="/project/settings" element={<ProjectSetting />}></Route>

        {/* 데이터베이스 연결 */}
        <Route path="/connection" element={<Connection />}></Route>

        {/* 로그인/회원가입 */}
        <Route path="/sign-in" element={<Login />}></Route>
	
      </Routes>
    </BrowserRouter>
  );
}

export default App;