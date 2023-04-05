import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import { Feed } from './pages';

import styles from './App.module.scss';

const { Header, Content, Footer } = Layout;

function App() {

  return (
    <BrowserRouter>
      <div className={`App ${styles.App}`}>
        <Header className={styles.header}>
          <div>HEADER</div>
        </Header>
        <Content className={styles.content}>
          <Routes>
            <Route path='/' element={<Navigate to='/feed' />} />
            <Route path='/feed' element={<Feed />} />
          </Routes>
        </Content>
        <Footer className={styles.footer}>
          <div>FOOTER</div>
        </Footer>
      </div>
    </BrowserRouter>
  )
}

export default App
