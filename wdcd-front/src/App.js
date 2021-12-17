import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Content } from 'carbon-components-react';

import CommonHeader from './components/CommonHeader';
import CommonFooter from './components/CommonFooter/CommonFooter';
import LandingPage from './content/LandingPage';
import NoticePage from './content/NoticePage';
import License from './content/License';
import EditArticle from './content/EditArticle';

import './App.scss';

function App() {
  return (
    <>
      <CommonHeader />
      <Content>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/license" element={<License />} />
          <Route path="/edit" element={<EditArticle />} />
        </Routes>
      </Content>
      <CommonFooter />
    </>
  );
}

export default App;
