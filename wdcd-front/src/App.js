import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Content } from 'carbon-components-react';
import CommonHeader from './components/CommonHeader';
import LandingPage from './content/LandingPage';
import NoticePage from './content/NoticePage';
import './App.scss';

function App() {
  return (
    <>
      <CommonHeader />
      <Content>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/notice" element={<NoticePage />} />
        </Routes>
      </Content>
    </>
  );
}

export default App;
